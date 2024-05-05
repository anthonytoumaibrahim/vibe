<?php

namespace App\Http\Controllers\Post;

use App\Models\Post;
use App\Models\Image;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

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

    public function delete($id)
    {
        $post = Post::where('id', $id)->where('user_id', Auth::id())->delete();

        return response()->json([
            'success' => true
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'content' => 'required|max:6000',
            'truncated' => 'required'
        ]);

        $post = new Post();
        $post->content = $request->content;
        $post->truncated = Str::of($request->truncated)->substr(0, 64);
        $post->user_id = Auth::id();
        $post->saveOrFail();

        // Add images
        if ($request->hasFile('images')) {

            $images = $request->images;
            foreach ($images as $image) {
                $size = $image->getSize();
                if ($size <= 6291456) {
                    // Store
                    $filename = Str::random(12) . "." . $image->getClientOriginalExtension();
                    Storage::disk('public')->putFileAs("/post_images", $image, $filename);
                    $newImg = new Image();
                    $newImg->url = "/post_images/{$filename}";
                    $post->images()->save($newImg);
                }
            }
        }


        return response()->json([
            'success' => true,
            'message' => 'Post created successfully'
        ]);
    }
}
