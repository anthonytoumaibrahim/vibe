<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;

class PasswordController extends Controller
{
    public function reset(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json([
                'success' => true
            ]);
        }

        return response()->json([
            'success' => false,
            'error' => $status
        ]);
    }

    public function generate(string $token)
    {
        return $token;
    }
}
