<?php

namespace App\Http\Controllers\User;

use App\Achievements\SavedAvatar;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CharacterPart;
use App\Models\Purchase;
use App\Models\PurchasedCharacterPart;
use App\Models\Transaction;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CharacterController extends Controller
{
    public function get()
    {
        $user = User::find(Auth::id());

        $isPremium = $user->is_premium;

        $parts = CharacterPart::all()->sortBy('price')->sortBy('premium', descending: $isPremium);

        $parts->map(function ($characterPart) use ($user) {
            if (!$characterPart->default) {
                $characterPart->is_purchased = $user->purchases()
                    ->where('purchasable_type', 'App\Models\CharacterPart')
                    ->where('purchasable_id', $characterPart->id)
                    ->exists();
            }
            return $characterPart;
        });

        return response()->json([
            'is_premium' => $isPremium,
            'data' => $user->character_data,
            'parts' => $parts->groupBy('type'),
            'colors' => config('character_builder.colors')
        ]);
    }

    public function buyPart(Request $request)
    {
        $part = CharacterPart::findOrFail($request->id);
        $user = User::find(Auth::id());
        if ($part->default) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot purchase this part.'
            ]);
        }
        // Did user already purchase it?
        $checkIfPurchased = $user->purchases()
            ->where('purchasable_type', 'App\Models\CharacterPart')
            ->where('purchasable_id', $part->id)
            ->exists();
        if ($checkIfPurchased) {
            return response()->json([
                'success' => false,
                'message' => 'You already purchased this part.'
            ]);
        }

        // Enough balance?
        $balance = $user->balance;
        if ($balance - $part->price < 0) {
            return response()->json([
                'success' => false,
                'balance_error' => true,
                'message' => 'Not enough balance'
            ]);
        }

        $purchase = new Purchase();
        $purchase->user_id = Auth::id();
        $purchase->purchasable_type = CharacterPart::class;
        $purchase->purchasable_id = $part->id;
        $user->purchases()->save($purchase);

        $transaction = new Transaction();
        $transaction->operation = "Purchased Character Part";
        $transaction->amount = -$part->price;
        $transaction->user_id = Auth::id();
        $transaction->save();

        return response()->json([
            'success' => true
        ]);
    }

    public function save(Request $request)
    {
        $avatar_2d = $request->avatar;
        $user = User::find(Auth::id());
        $user->character_data = $request->json('data');

        if ($avatar_2d) {
            // Delete old avatar
            if ($user->avatar) {
                try {
                    Storage::disk('public')->delete($user->avatar);
                } catch (\RunTimeException $e) {
                }
            }

            $filename = Str::random(12) . ".png";
            Storage::disk('public')->putFileAs("/user_avatars", $avatar_2d, $filename);
            $user->avatar = "/user_avatars/{$filename}";
        }
        $user->saveOrFail();

        $user->unlock(new SavedAvatar());

        return response()->json([
            'success' => true
        ]);
    }
}
