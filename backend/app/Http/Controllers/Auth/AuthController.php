<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function checkUsername(Request $request, $username = "")
    {
        if ($username) {
            $user = User::where('username', $username)->first();
            if ($user) {
                return false;
            }
            return true;
        } else {
            $request->validate([
                'username' => 'min:3|max:16|unique:users|regex:/^[a-zA-Z][a-zA-Z0-9\._-]+$/i'
            ]);
            return response()->json([
                'success' => true
            ]);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|min:3|max:16|unique:users|regex:/^[a-zA-Z][a-zA-Z0-9\._-]+$/i',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->saveOrFail();

        $transaction = new Transaction();
        $transaction->operation = "Welcome Gift";
        $transaction->amount = 1000;
        $transaction->user_id = $user->id;
        $transaction->save();


        $token = Auth::login($user);

        return response()->json([
            'success' => true,
            'authorization' => [
                'token' => $token,
                'type' => 'Bearer',
            ]
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('username', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials.',
            ]);
        }

        return response()->json([
            'success' => true,
            'authorization' => [
                'token' => $token,
                'type' => 'Bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'success' => true
        ]);
    }
}
