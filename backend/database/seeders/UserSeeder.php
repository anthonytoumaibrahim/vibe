<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = new User();
        $admin->username = "admin";
        $admin->email = "admin@vibe.com";
        $admin->password = Hash::make("VlB&8_!^3");
        $admin->saveOrFail();

        $transaction = new Transaction();
        $transaction->operation = "Admin Welcome Gift";
        $transaction->amount = 60000;
        $transaction->user_id = $admin->id;
        $transaction->save();

        $admin->assignRole('admin');
    }
}
