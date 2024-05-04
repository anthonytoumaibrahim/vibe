<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function getPosts($id = null)
    {
        $id = $id ? $id : Auth::id();
        $posts = Post::with('comments', 'images')->where('user_id', $id)->get();
        if ($posts) {
            return response()->json([
                'success' => true,
                'posts' => $posts
            ]);
        }
        return response()->json([
            'success' => false
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'content' => 'required|min:4|max:450'
        ]);
        $post = new Post();
        $post->content = $request->content;
        $post->user_id = Auth::id();
        $post->saveOrFail();

        return response()->json([
            'success' => true,
            'message' => 'Post created successfully'
        ]);
    }
}
