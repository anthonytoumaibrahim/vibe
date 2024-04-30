<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CharacterController extends Controller
{
    public function get()
    {
        $user = User::find(Auth::id());
        return response()->json([
            'data' => $user->character_data
        ]);
    }

    public function save(Request $request)
    {
        $avatar_2d = $request->avatar;
        $user = User::find(Auth::id());
        $user->character_data = $request->json('data');

        if ($avatar_2d) {
            // Delete old avatar
            Storage::disk('public')->delete($user->avatar);

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
