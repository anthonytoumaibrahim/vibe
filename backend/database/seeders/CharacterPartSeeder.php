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
            'ai_description' => 'Well-defined waist, fuller hips, rounded buttocks, ample bust, hourglass silhouette. Suitable for characters who are females.',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'body',
            'ai_description' => 'Broad shoulders, narrow hips, muscular build, defined chest and abdominal muscles. Conveys strength, athleticism, and masculinity. Suitable for characters who are males.',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'body',
            'ai_description' => 'Lean and toned body, slender waist, slight curves, toned arms and legs. Strikes a balance between femininity and athleticism, with a versatile appeal. Mostly suitable for female characters.',
            'default' => true
        ]);
        // Face
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'face',
            'ai_description' => 'Round face, feminine appearance',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'face',
            'ai_description' => 'Oval face shape, masculine, with skin details and shine',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'face',
            'ai_description' => 'Oval face shape, best pick for masculine appearance',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'face',
            'ai_description' => 'Round face, slighly large',
            'default' => true
        ]);
        // Hair
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'hair',
            'ai_description' => 'Short straight feminine hair',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'hair',
            'ai_description' => 'Short frizzy hairstyle, feminine',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'hair',
            'ai_description' => 'Tall feminine hair behind back',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 10,
            'type' => 'hair',
            'ai_description' => 'Tall female hair in a bun',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'hair',
            'ai_description' => 'Short female hair in a bun',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 7,
            'type' => 'hair',
            'ai_description' => 'Medium female straight hair with bangs',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 8,
            'type' => 'hair',
            'ai_description' => 'Medium wavy female hair',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'hair',
            'ai_description' => 'Male hairstyle, with hair strands',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'hair',
            'ai_description' => 'Male hairstyle, faded on the sides',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 9,
            'type' => 'hair',
            'ai_description' => 'Male hairstyle',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 12,
            'type' => 'hair',
            'ai_description' => 'Short male hair with bun',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 13,
            'type' => 'hair',
            'ai_description' => 'Short male hair',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 14,
            'type' => 'hair',
            'ai_description' => 'Short messy male hair',
            'price' => 100
        ]);
        CharacterPart::create([
            'client_id' => 15,
            'type' => 'hair',
            'ai_description' => 'Short, formal male hair',
            'premium' => true,
            'default' => true,
        ]);
        CharacterPart::create([
            'client_id' => 16,
            'type' => 'hair',
            'ai_description' => 'Medium-tall male hair',
            'premium' => true,
            'default' => true,
        ]);
        // Brows
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'eyebrow',
            'ai_description' => 'Medium eyebrow, slightly angry expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'eyebrow',
            'ai_description' => 'Thick eyebrow, angry expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'eyebrow',
            'ai_description' => 'Thin eyebrow, innocent expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'eyebrow',
            'ai_description' => 'Thick eyebrow, normal expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'eyebrow',
            'ai_description' => 'Thick eyebrow with slightly bent shape',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'eyebrow',
            'ai_description' => 'Regular eyebrow shape',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 7,
            'type' => 'eyebrow',
            'ai_description' => '',
            'default' => true,
            'premium' => true
        ]);
        // Eyes
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'eye',
            'ai_description' => 'Happy expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'eye',
            'ai_description' => 'Widely spaced eyes',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'eye',
            'ai_description' => 'Lazy eye shape',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'eye',
            'ai_description' => 'Smaller eye shape',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'eye',
            'ai_description' => 'Asian eye shape',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'eye',
            'ai_description' => 'Normal eye shape, slightly closed',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 7,
            'type' => 'eye',
            'ai_description' => 'Big rounded eyes, suitable for anime characters',
            'price' => 75
        ]);
        // Nose
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'nose',
            'ai_description' => 'Tall nose',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'nose',
            'ai_description' => 'Big, crooked rounded nose',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'nose',
            'ai_description' => 'Triangle shaped nose',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'nose',
            'ai_description' => 'Small, rounded nose',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'nose',
            'ai_description' => 'Tall, flat shaped nose',
            'default' => true
        ]);
        // Mouth
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'mouth',
            'ai_description' => 'Small lips, smiling with a little teeth showing',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'mouth',
            'ai_description' => 'Small lips, slight smile',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'mouth',
            'ai_description' => 'Small lips, sad expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'mouth',
            'ai_description' => 'Medium lips, smiling with teeth showing',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'mouth',
            'ai_description' => 'Medium lips, relaxed and happy',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'mouth',
            'ai_description' => 'Medium lips, relaxed and neutral expression',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 7,
            'type' => 'mouth',
            'ai_description' => 'Smiling, full teeth showing',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 8,
            'type' => 'mouth',
            'ai_description' => 'Smiling, slight teeth showing',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 9,
            'type' => 'mouth',
            'ai_description' => 'Big bottom lip, slight smile',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 10,
            'type' => 'mouth',
            'ai_description' => 'Small lips, neutral expression',
            'default' => true
        ]);
        // Eyeglasses
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'eyeglasses',
            'ai_description' => 'Rounded eyeglasses, thin frame',
            'default' => true
        ]);
        // Beards
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'beard',
            'ai_description' => '',
            'price' => 70
        ]);
    }
}
