<?php

declare(strict_types=1);

namespace App\Achievements;

use App\Models\Transaction;
use Assada\Achievements\Achievement;
use Illuminate\Support\Facades\Auth;

/**
 * Class Registered
 *
 * @package App\Achievements
 */
class UsedAI extends Achievement
{
    /*
     * The achievement name
     */
    public $name = 'Used AI To Make Your Avatar';

    /*
     * A small description for the achievement
     */
    public $description = 'Welcome to the future!';

    public function whenUnlocked($progress)
    {
        Transaction::create([
            'operation' => $this->name,
            'amount' => 100,
            'user_id' => Auth::id()
        ]);
    }
}
