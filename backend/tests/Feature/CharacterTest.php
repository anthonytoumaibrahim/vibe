<?php

namespace Tests\Feature;

use App\Models\CharacterPart;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CharacterTest extends TestCase
{
    /**
     * Tests character buy part API
     */
    public function test_character_buy_part_api(): void
    {
        $user = User::where('username', 'admin')->first();
        $buyablePart = CharacterPart::where('price', '>', 0)->first();

        $response = $this->actingAs($user)->post('/api/user/buy-part', [
            'id' => $buyablePart->id
        ]);

        $response->assertStatus(200);

        $checkIfPurchased = $user->purchases()
            ->where('purchasable_type', 'App\Models\CharacterPart')
            ->where('purchasable_id', $buyablePart->id)
            ->exists();
        if ($checkIfPurchased) {
            $response->assertJson([
                'success' => false,
                'message' => 'You already purchased this part.'
            ]);
        } else {
            $response->assertJson([
                'success' => true
            ]);
        }
    }
}
