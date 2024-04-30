<?php

namespace App\Http\Controllers\Bio;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BioController extends Controller
{
    public function save(Request $request)
    {
        $user = User::find(Auth::id());
        $user->bio = $request->bio;
        $user->saveOrFail();

        return response()->json([
            'success' => true
        ]);
    }
}
