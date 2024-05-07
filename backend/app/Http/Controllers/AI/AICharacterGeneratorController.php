<?php

namespace App\Http\Controllers\AI;

use App\Http\Controllers\Controller;
use App\Models\CharacterPart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AICharacterGeneratorController extends Controller
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

        $request->validate([
            'message' => 'required|min:16|max:255'
        ]);
        $response = Http::acceptJson()->withHeader('Authorization', "Bearer " . config('app.openai_key'))->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-3.5-turbo-0125',
            'response_format' => [
                'type' => 'json_object'
            ],
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'You are a helpful 2D character creation assistant designed to output JSON. Your job is to build a 2D character using SVGs that have IDs and predefined colors, based on the user\'s description. The data at your disposal is the following, make sure to use the description field to understand what each part looks like: ' . $parts . '. Your job is to return a JSON object that contains every type of parts, with only one ID and fill color. For example: {"eye": {"id": 4, "fill": "#9a9b9d"}, "body": {"id": 1, "fill": "#f0b8a0"}, "face": {"id": 1}, "hair": {"id": 2, "fill": "#9a3300"}, "nose": {"id": 4}, "mouth": {"id": 8, "fill": "#a31a57"}, "eyebrow": {"id": 4, "fill": "#9a3300"}, "eyeglasses": {"id": 0}}. Make sure to edit the fill colors of the returned JSON object to match the description of the user. You can set an ID of 0 for optional types like beard, eyebrows, eyeglasses and hair. The body fill refers to the skintone.'
                ],
                [
                    'role' => 'user',
                    'content' => $request->message
                ]
            ]
        ]);

        $response = $response->json();
        if ($response['choices']) {
            return response()->json([
                'success' => true,
                'data' => $response['choices'][0]['message']['content']
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Sorry, couldn\'t generate your Avatar.'
        ]);
    }
}
