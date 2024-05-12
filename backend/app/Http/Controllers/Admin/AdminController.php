<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getUsers()
    {
        $users = User::paginate(5)->makeVisible('email');
        return response()->json($users);
    }
}
