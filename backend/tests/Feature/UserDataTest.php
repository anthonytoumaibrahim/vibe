<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserDataTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user_profile_data(): void
    {
        $user = User::where('username', 'admin')->first();

        $response = $this->actingAs($user)->json('GET', '/api/user/profile');

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'id',
            'name',
            'username',
            'character_data',
            'profile_data',
            'bio',
            'country',
            'active',
            'posts',
            'badges',
            'backgrounds',
            'avatar_full',
            'is_premium',
            'is_friend',
            'is_owner',
            'is_admin',
        ]);
    }
}
