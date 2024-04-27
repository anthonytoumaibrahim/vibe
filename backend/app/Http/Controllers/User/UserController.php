<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUserInfo(Request $request)
    {
        $user = Auth::user();
        return response()->json($user);
    }
}
