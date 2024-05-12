<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Chatroom;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getUsers()
    {
        $users = User::paginate(5)->makeVisible('email');
        return response()->json($users);
    }

    public function getStats()
    {
        $users_count = User::count();
        $premium_count = User::with('roles')->get()->filter(
            fn ($user) => $user->roles->where('name', 'premium')->toArray()
        )->count();
        $posts_count = Post::count();
        $comments_count = Comment::count();
        $chatrooms_count = Chatroom::count();
        return response()->json([
            'users_count' => $users_count,
            'premium_count' => $premium_count,
            'posts_count' => $posts_count,
            'comments_count' => $comments_count,
            'chatrooms_count' => $chatrooms_count
        ]);
    }
}
