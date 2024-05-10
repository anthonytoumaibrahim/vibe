<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostCommentController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id',
            'comment' => 'required|min:3|max:200'
        ]);

        $post = Post::findOrFail($request->post_id);

        $comment = new Comment();
        $comment->text = $request->comment;
        $comment->user_id = Auth::id();

        $post->comments()->save($comment);

        return response()->json([
            'success' => true
        ]);
    }

    public function delete($id)
    {
        $comment = Comment::where('user_id', Auth::id())->where('id', $id)->first();
        if ($comment) {
            $comment->delete();
            return response()->json([
                'success' => true
            ]);
        }
        return response()->json([
            'success' => false
        ]);
    }
}
