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
        $response = Http::acceptJson()->post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' . config('app.gemini_key'), [
            'contents' => [
                [
                    'parts' => [[
                        'text' => 'You are a helpful 2D character creation assistant designed to output JSON. Your job is to build a 2D character using SVGs that have IDs and predefined colors, based on this description: "...". The returned object needs to look like the following: {"eye": {"id": 4, "fill": "#9a9b9d"}, "body": {"id": 1, "fill": "#f0b8a0"}, "face": {"id": 1}, "hair": {"id": 2, "fill": "#9a3300"}, "nose": {"id": 4}, "mouth": {"id": 8, "fill": "#a31a57"}, "eyebrow": {"id": 4, "fill": "#9a3300"}, "eyeglasses": {"id": 0}}. The data at your disposal is the following, make sure to use the ai_description field to understand what parts look like: ' . CharacterPart::all()->makeHidden(['created_at', 'updated_at', 'default', 'premium', 'price', 'server_id'])->groupBy('type') . '. The corresponding colors for each category are as following, replace the fill property to match one of the following for each part type: ' . json_encode(config('character_builder.colors'))
                    ]]
                ]
            ]
        ]);

        return response()->json($response->json());
    }
}
