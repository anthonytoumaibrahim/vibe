<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getInfo(Request $request)
    {
        $user = User::find(Auth::id());
        return response()->json($user);
    }

    public function getProfile($id = null)
    {
        $id = $id ? $id : Auth::id();
        $user = User::find($id)->makeVisible('character_data');
        return response()->json($user);
    }
}
