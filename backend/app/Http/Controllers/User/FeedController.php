<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeedController extends Controller
{
    public function getFeed()
    {
        $members = User::limit(5)->orderBy('created_at', 'DESC')->get();
        $posts = Post::where('user_id', '!=', Auth::id())->withCount('likes')->orderBy('likes_count', 'DESC')->paginate(5);

        return response()->json([
            'latest_members' => $members,
            'posts' => $posts
        ]);
    }
}
