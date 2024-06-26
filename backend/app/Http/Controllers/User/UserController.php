<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Models\Background;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getInfo()
    {
        $user = User::with('friendRequests')->find(Auth::id())->append('balance');
        return response()->json($user);
    }

    public function getProfile($username = null)
    {
        if ($username) {
            $visitedUser = User::where('username', $username)->where('active', true)->firstOrFail();
            $id = $visitedUser->id;
        } else {
            $id = Auth::id();
        }
        $user = User::find($id)->makeVisible('character_data', 'profile_data', 'bio')->makeHidden('email', 'email_verified_at', 'balance');
        $user->posts = $user->posts()->orderBy('created_at', 'DESC')->paginate(5);

        // Badges
        $userAchievements = $user->unlockedAchievements();
        $userAchievements->each(function ($achievement) {
            $achievement->details->slug = Str::of($achievement->details->name)->slug();
        });
        $user->badges = $userAchievements;

        // Backgrounds
        $isPremium = $user->is_premium;

        $backgrounds = Background::where('chatroom_bg', false)->orderBy('price')->orderBy('premium', $isPremium ? 'DESC' : 'ASC')->get();

        $backgrounds->map(function ($background) use ($user) {
            if (!$background->default) {
                $background->is_purchased = $user->purchases()
                    ->where('purchasable_type', 'App\Models\Background')
                    ->where('purchasable_id', $background->id)
                    ->exists();
            }
            return $background;
        });

        $user->backgrounds = $backgrounds;
        return response()->json($user);
    }

    public function updateBackground(Request $request)
    {
        $request->validate([
            'background_id' => 'required|exists:backgrounds,id'
        ]);
        $user = User::find(Auth::id());
        $user->profile_data = [
            'background' => $request->background_id
        ];
        $user->saveOrFail();
        return response()->json([
            'success' => true
        ]);
    }
}
