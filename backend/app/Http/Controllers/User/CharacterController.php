<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
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
            $filename = $user->id . ".png";
            Storage::disk('public')->putFileAs("/user_avatars", $avatar_2d, $filename);
            $user->avatar = config("app.url") . "/storage/user_avatars/{$filename}";
        }
        $user->saveOrFail();

        return response()->json([
            'success' => true
        ]);
    }
}
