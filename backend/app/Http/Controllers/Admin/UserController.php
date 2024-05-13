<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function ban(Request $request)
    {
        $user = User::find($request->id);
        $user->active = !$user->active;
        return response()->json([
            'success' => true
        ]);
    }
}
