<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Background;
use App\Models\PurchasedBackground;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getInfo(Request $request)
    {
        $user = User::find(Auth::id())->append('balance');
        return response()->json($user);
    }

    public function getProfile($username = null)
    {
        if ($username) {
            $visitedUser = User::where('username', $username)->firstOrFail();
            $id = $visitedUser->id;
        } else {
            $id = Auth::id();
        }
        $user = User::with('achievements', 'posts')->find($id)->makeVisible('character_data')->makeHidden('email', 'email_verified_at', 'balance')->append('is_friend');
        $user->is_owner = $id === Auth::id();
        $user->is_friend = $user->friends->contains('id', Auth::id());

        // Backgrounds
        $isPremium = $user->is_premium;

        $backgrounds = Background::all()->sortBy('price')->sortBy('premium', descending: $isPremium);

        $purchasedBackgroundsIds = PurchasedBackground::where('user_id', $user->id)
            ->pluck('background_id')
            ->toArray();

        $purchasedBackgroundsIds = new Collection($purchasedBackgroundsIds);

        $backgrounds->transform(function ($background) use ($purchasedBackgroundsIds) {
            $background->is_purchased = $purchasedBackgroundsIds->contains($background->id);
            return $background;
        });

        $user->backgrounds = $backgrounds;
        return response()->json($user);
    }
}
