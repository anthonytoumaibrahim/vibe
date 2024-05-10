<?php

namespace Database\Seeders;

use App\Models\Background;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BackgroundSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Showcase Backgrounds
        Background::create([
            'name' => 'Desert Balcony',
            'image_url' => 'desert_balcony.webp'
        ]);
        Background::create([
            'name' => 'Bedroom',
            'image_url' => 'bedroom.webp'
        ]);
        Background::create([
            'name' => 'Living Room',
            'image_url' => 'living_room.webp'
        ]);
        Background::create([
            'name' => 'Spring Landscape',
            'image_url' => 'spring_landscape.webp'
        ]);
        Background::create([
            'name' => 'Road to Sea',
            'image_url' => 'road_to_sea.webp'
        ]);
        Background::create([
            'name' => 'Oval Office',
            'image_url' => 'oval_office.webp',
            'price' => 70
        ]);
        Background::create([
            'name' => 'Moon behind Mountains',
            'image_url' => 'night_mountains_moon.webp',
            'price' => 70
        ]);
        Background::create([
            'name' => 'Magic School',
            'image_url' => 'magic_school.webp',
            'premium' => true
        ]);
        Background::create([
            'name' => 'Magic Library',
            'image_url' => 'magic_library.webp',
            'premium' => true
        ]);

        // Chatroom backgrounds
        Background::create([
            'name' => 'Neon Living Room',
            'image_url' => 'neon_room.webp',
            'chatroom_bg' => true
        ]);
        Background::create([
            'name' => 'Restaurant',
            'image_url' => 'restaurant.webp',
            'chatroom_bg' => true
        ]);
        Background::create([
            'name' => 'Pool',
            'image_url' => 'pool.webp',
            'chatroom_bg' => true
        ]);
    }
}
