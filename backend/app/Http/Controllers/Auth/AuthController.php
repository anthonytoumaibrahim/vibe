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
                return true;
            }
            return false;
        } else {
            $request->validate([
                'username' => 'min:3|max:16|unique:users|regex:/^[a-zA-Z][a-zA-Z0-9\._-]+$/i'
            ]);
            return response()->json([
                'success' => true
            ]);
        }
    }

    public function createUser($username, $email, $password = null, $oAuthId = null)
    {
        $user = new User();
        $user->username = $username;
        $user->email = $email;
        if ($password) {
            $user->password = Hash::make($password);
        }
        if ($oAuthId) {
            $user->oauth_id = $oAuthId;
        }
        $user->saveOrFail();

        $transaction = new Transaction();
        $transaction->operation = "Welcome Gift";
        $transaction->amount = 250;
        $transaction->user_id = $user->id;
        $transaction->save();

        return $user;
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|min:3|max:16|unique:users|regex:/^[a-zA-Z][a-zA-Z0-9\._-]+$/i',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = $this->createUser($request->username, $request->email, $request->password);

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

        // Check if user doesn't have password (oauth)
        $user = User::where('username', $credentials['username'])->first();

        if (!$user->active) {
            return response()->json([
                'success' => false,
                'message' => 'Your account has been banned.',
            ]);
        }

        if ($user) {
            if (!$user->password) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please sign in with Google.',
                ]);
            }
        }

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

    public function checkAuth()
    {
        $user = User::find(Auth::id());
        return response()->json([
            'success' => true,
            'is_premium' => $user->hasRole('premium'),
            'is_admin' => $user->hasRole('admin')
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'success' => true
        ]);
    }
}
