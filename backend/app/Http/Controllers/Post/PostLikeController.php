<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostLikeController extends Controller
{
    public function addLike(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id'
        ]);
        $post = Post::find($request->post_id);
        $like = new Like();
        $like->user_id = Auth::id();
        $like->dislike = false;
        $post->likes()->save($like);

        return response()->json([
            'success' => true
        ]);
    }
}
