<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminTest extends TestCase
{
    /**
     * Test if non-admin can access the dashboard API
     */
    public function test_that_non_admin_cannot_access_dashboard_api(): void
    {
        $response = $this->get('/api/admin/stats');

        $response->assertStatus(500);
    }

    /**
     * Test if admin can access the dashboard API
     */
    public function test_that_admin_can_access_dashboard_api(): void
    {
        $user = User::role('admin')->first();
        $response = $this->actingAs($user)->get('/api/admin/stats');

        $response->assertStatus(200);
    }
}
