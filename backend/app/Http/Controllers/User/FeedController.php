<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class FeedController extends Controller
{
    public function getFeed()
    {
        $members = User::limit(5)->orderBy('created_at', 'DESC')->get();

        $today = Carbon::today();

        $posts = Post::where('created_at', '>=', $today)
            ->where('user_id', '!=', Auth::id())
            ->withCount('likes')
            ->orderBy('likes_count', 'DESC')
            ->orderBy('created_at', 'DESC')
            ->paginate(5);


        if ($posts->isEmpty()) {
            $posts = Post::where('created_at', '<', $today)
                ->where('user_id', '!=', Auth::id())
                ->withCount('likes')
                ->orderBy('likes_count', 'DESC')
                ->orderBy('created_at', 'DESC')
                ->paginate(5);
        }

        return response()->json([
            'latest_members' => $members,
            'posts' => $posts
        ]);
    }
}
