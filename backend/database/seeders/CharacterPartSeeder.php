<?php

namespace Database\Seeders;

use App\Models\CharacterPart;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CharacterPartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Body
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'body',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'body',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'body',
            'ai_description' => '',
            'default' => true
        ]);
        // Face
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'face',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'face',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'face',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'face',
            'ai_description' => '',
            'default' => true
        ]);
        // Hair
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'hair',
            'ai_description' => '',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 10,
            'type' => 'hair',
            'ai_description' => '',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 7,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 8,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 9,
            'type' => 'hair',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 12,
            'type' => 'hair',
            'ai_description' => '',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 13,
            'type' => 'hair',
            'ai_description' => '',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 14,
            'type' => 'hair',
            'ai_description' => '',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 15,
            'type' => 'hair',
            'ai_description' => '',
            'premium' => true,
            'default' => true,
        ]);
        CharacterPart::create([
            'client_id' => 16,
            'type' => 'hair',
            'ai_description' => '',
            'premium' => true,
            'default' => true,
        ]);
        // Brows
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true
        ]);
        // Eyes
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'eye',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'eye',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'eye',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'eye',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'eye',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'eye',
            'ai_description' => '',
            'default' => true
        ]);
        // Nose
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'nose',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'nose',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'nose',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'nose',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'nose',
            'ai_description' => '',
            'default' => true
        ]);
        // Mouth
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 7,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 8,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 9,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 10,
            'type' => 'mouth',
            'ai_description' => '',
            'default' => true
        ]);
        // Eyeglasses
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'eyeglasses',
            'ai_description' => '',
            'default' => true
        ]);
    }
}
