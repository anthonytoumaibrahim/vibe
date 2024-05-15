<?php

namespace App\Http\Controllers\AI;

use Error;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\CharacterPart;
use App\Achievements\SavedAvatar;
use App\Achievements\Created10Posts;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use App\Achievements\CreatedFirstPost;
use App\Http\Controllers\Auth\AuthController;

class AIAdminGeneratorController
{
    public function generate(Request $request)
    {
        $colors = config('character_builder.colors');
        $parts = CharacterPart::all()->groupBy('type')->map(function ($items, $type) use ($colors) {
            return [
                'colors' => $colors[$type] ?? null,
                'parts' => $items->map(function ($part) {
                    return [
                        'id' => $part->client_id,
                        'description' => $part->ai_description
                    ];
                })
            ];
        });

        $response = Http::acceptJson()->withHeader('Authorization', "Bearer " . config('app.openai_key'))->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-3.5-turbo-0125',
            'response_format' => [
                'type' => 'json_object'
            ],
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'You are a helpful assistant designed to output JSON. Your job is to generate 5 user objects in an array for a game/social media website. The output of each user object needs to look like the following: {"username": "...", "email": "...", "character_data": {...}, "posts":[...]}. The username needs to be between 3 and 16 characters. The email needs to be a real email, i.e gmail, outlook or yahoo. The character_data is an object that looks like the following: {"eye": {"id": 4, "fill": "#9a9b9d"}, "body": {"id": 1, "fill": "#f0b8a0"}, "face": {"id": 1}, "hair": {"id": 2, "fill": "#9a3300"}, "nose": {"id": 4}, "mouth": {"id": 8, "fill": "#a31a57"}, "eyebrow": {"id": 4, "fill": "#9a3300"}, "eyeglasses": {"id": 0}}. For each character, use random parts from this data (Do NOT output IDs outside of each category): ' . $parts . '. For the posts key, you can output between 0 and 5 posts randomly to each user, make sure that the post content is related to the username you picked.'
                ]
            ]
        ]);

        $response = $response->json();
        if ($response['choices']) {
            $data = json_decode($response['choices'][0]['message']['content'], true);
            try {
                $users = $data['users'];
                foreach ($users as $user) {
                    $u = new User();
                    $u->username = $user['username'];
                    $u->email = $user['email'];
                    $u->password = Hash::make('hello123');
                    $u->character_data = json_encode($user['character_data']);
                    $u->saveOrFail();
                    // Posts
                    $posts = $user['posts'];
                    foreach ($posts as $post) {
                        $p = new Post();
                        $p->content = $post['content'];
                        $p->truncated = Str::of($post['content'])->substr(0, 64);
                        $p->user_id = $u->id;
                        $p->saveOrFail();

                        $u->unlock(new CreatedFirstPost());
                        $u->addProgress(new Created10Posts(), 1);
                    }
                    $u->unlock(new SavedAvatar());
                }
            } catch (Error $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sorry, an error happened.'
                ]);
            }


            return response()->json([
                'success' => true,
                'message' => 'Generation done'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Sorry, couldn\'t generate data.'
        ]);
    }
}
