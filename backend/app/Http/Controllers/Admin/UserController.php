<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = User::withoutRole('admin')->get()->makeVisible('email');
        return response()->json($users);
    }

    public function ban(Request $request)
    {
        $user = User::find($request->id);
        $user->active = !$user->active;
        $user->save();
        return response()->json([
            'success' => true
        ]);
    }
}
