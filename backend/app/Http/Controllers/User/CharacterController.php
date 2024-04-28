<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CharacterController extends Controller
{
    public function save(Request $request)
    {
        $user = User::find(Auth::id());
        $user->character_data = $request->json('data');
        $user->saveOrFail();

        return response()->json([
            'success' => true
        ]);
    }
}
