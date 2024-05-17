<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ChatroomTest extends TestCase
{
    /**
     * Tests Chatrooms API
     */
    public function test_chatrooms_api(): void
    {
        $user = User::where('username', 'admin')->first();

        $response = $this->actingAs($user)->json('GET', '/api/user/chatrooms');

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'chatrooms',
            'backgrounds'
        ]);
    }
}
