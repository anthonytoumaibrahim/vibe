<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CharacterPart;
use App\Models\PurchasedCharacterPart;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CharacterController extends Controller
{
    public function get()
    {
        $user = User::find(Auth::id());

        $isPremium = $user->hasRole('premium');

        $parts = CharacterPart::all()->sortBy('price')->sortBy('premium', descending: $isPremium);

        $purchasedPartIds = PurchasedCharacterPart::where('user_id', $user->id)
            ->pluck('part_id')
            ->toArray();

        $purchasedPartIds = new Collection($purchasedPartIds);

        $parts->transform(function ($characterPart) use ($purchasedPartIds) {
            if (!$characterPart->default) {
                $characterPart->is_purchased = $purchasedPartIds->contains($characterPart->id);
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

    public function save(Request $request)
    {
        $avatar_2d = $request->avatar;
        $user = User::find(Auth::id());
        $user->character_data = $request->json('data');

        if ($avatar_2d) {
            // Delete old avatar
            try {
                Storage::disk('public')->delete($user->avatar);
            } catch (\RunTimeException $e) {
            }

            $filename = Str::random(12) . ".png";
            Storage::disk('public')->putFileAs("/user_avatars", $avatar_2d, $filename);
            $user->avatar = "/user_avatars/{$filename}";
        }
        $user->saveOrFail();

        return response()->json([
            'success' => true
        ]);
    }
}
