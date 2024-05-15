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
            'ai_description' => 'well-defined waist, fuller hips, rounded buttocks, ample bust, hourglass silhouette, female',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'body',
            'ai_description' => 'broad shoulders, narrow hips, muscular build, defined chest and abdominal muscles, male',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'body',
            'ai_description' => 'lean and toned body, slender waist, slight curves, toned arms and legs, unisex, female',
            'default' => true
        ]);
        // Face
        CharacterPart::create([
            'client_id' => 1,
            'type' => 'face',
            'ai_description' => 'rounded, feminine, small chin',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'face',
            'ai_description' => 'oval shape, masculine, skin details, skin shine',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'face',
            'ai_description' => 'oval shape, masculine, well-defined jaw',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 4,
            'type' => 'face',
            'ai_description' => 'rounded, long chin',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 5,
            'type' => 'face',
            'ai_description' => 'rounded',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 6,
            'type' => 'face',
            'ai_description' => 'oval, wide forehead, narrow chin',
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
        CharacterPart::create([
            'client_id' => 17,
            'type' => 'hair',
            'ai_description' => 'Straight, sleek hairstyle with the hair pulled back. The hair is straight, neatly combed back without any visible strands falling forward. There are no bangs; instead, the hair is smoothly pulled back from the forehead. Ears are visible. The overall look of the hairstyle gives an impression of neatness and simplicity.',
            'premium' => true,
            'default' => true,
        ]);
        CharacterPart::create([
            'client_id' => 18,
            'type' => 'hair',
            'ai_description' => 'Straight, sleek hairstyle. The hair is combed down smoothly, covering the right ear and reaching just below the base of the head.',
            'premium' => true,
            'default' => true,
        ]);
        CharacterPart::create([
            'client_id' => 19,
            'type' => 'hair',
            'ai_description' => 'Short, tousled look. The hair is cut above ear length. It\'s a modern and casual style, with strands of hair styled in a tousled manner, giving it a relaxed and carefree vibe. This hairstyle is often associated with a youthful and energetic personality.',
            'premium' => true,
            'default' => true,
        ]);
        CharacterPart::create([
            'client_id' => 20,
            'type' => 'hair',
            'ai_description' => 'Medium-length, wavy hairstyle. The hair is styled with volume and curls, framing the face and extending just below the ears. It\'s a modern and casual style, giving an impression of a relaxed and carefree vibe. The hair is not covering the ears, indicating that it is cut to a length that allows for this. This hairstyle is often associated with a youthful and energetic personality.',
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
            'ai_description' => 'curved, thick',
            'default' => true,
            'premium' => true
        ]);
        CharacterPart::create([
            'client_id' => 8,
            'type' => 'eyebrow',
            'ai_description' => 'arched, thick',
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
            'premium' => true,
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 8,
            'type' => 'eye',
            'ai_description' => 'Big rounded curved eyes, looking at a direction',
            'premium' => true,
            'default' => true
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
            'premium' => true,
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
        CharacterPart::create([
            'client_id' => 2,
            'type' => 'eyeglasses',
            'ai_description' => 'Oval eyeglasses, thin frame',
            'default' => true
        ]);
        CharacterPart::create([
            'client_id' => 3,
            'type' => 'eyeglasses',
            'ai_description' => 'Rectangle eyeglasses, thin frame',
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
