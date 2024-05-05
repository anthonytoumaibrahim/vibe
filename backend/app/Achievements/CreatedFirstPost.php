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
class CreatedFirstPost extends Achievement
{
    /*
     * The achievement name
     */
    public $name = 'Created Your First Post';

    /*
     * A small description for the achievement
     */
    public $description = '';

    public function whenUnlocked($progress)
    {
        Transaction::create([
            'operation' => $this->name,
            'amount' => 40,
            'user_id' => Auth::id()
        ]);
    }
}
