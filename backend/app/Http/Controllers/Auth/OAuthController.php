<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class OAuthController extends AuthController
{
    public function OAuth(Request $request)
    {
        $access_token = $request->access_token;
        $response = Http::withUserAgent($request->userAgent())->withHeader('Authorization', "Bearer " . $access_token)->acceptJson()->get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" . $access_token);
        $response = $response->json();
        if ($response['error'] ?? false) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to login with Google.'
            ], 401);
        }
        $oAuthId = $response['id'];
        $oAuthName = $response['name'];
        $oAuthEmail = $response['email'];

        $userExists = User::where('email', $oAuthEmail)->first();
        if ($userExists) {
            if (!$userExists->active) {
                return response()->json([
                    'success' => false,
                    'message' => 'Your account has been banned.',
                ]);
            }

            if ($userExists->oauth_id === $oAuthId) {
                $token = Auth::login($userExists);

                return response()->json([
                    'success' => true,
                    'authorization' => [
                        'token' => $token,
                        'type' => 'Bearer',
                    ]
                ]);
            }
            return response()->json([
                'success' => false,
                'message' => 'A user with this email address already exists.'
            ], 401);
        }

        // New user
        $username = Str::of($oAuthEmail)->before('@')->substr(0, 15);
        if ($this->checkUsername($request, $username)) {
            $username = Str::of(uniqid('vibe_'))->substr(0, 15);
        }

        $user = $this->createUser($username, $oAuthEmail, null, $oAuthId);

        $token = Auth::login($user);

        return response()->json([
            'success' => true,
            'authorization' => [
                'token' => $token,
                'type' => 'Bearer',
            ]
        ]);
    }
}
