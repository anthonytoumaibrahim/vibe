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

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|min:4|max:6000',
            'images' => [
                'max:4',
                File::image()->max('6mb')
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Your post could not be created'
            ]);
        }

        $validated = $validator->validated();

        $post = new Post();
        $post->content = $validated['content'];
        $post->user_id = Auth::id();
        $post->saveOrFail();

        // Add images
        $images = $validated['images'];
        foreach ($images as $image) {
            // Store
            $filename = Str::random(12) . "." . $image->extension();
            Storage::disk('public')->putFileAs("/post_images", $image, $filename);
            $newImg = new Image();
            $newImg->url = "/post_images/{$filename}";
            $post->images()->save($newImg);
        }

        return response()->json([
            'success' => true,
            'message' => 'Post created successfully'
        ]);
    }
}
