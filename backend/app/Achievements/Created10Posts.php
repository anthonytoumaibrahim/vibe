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
class Created10Posts extends Achievement
{
    /*
     * The achievement name
     */
    public $name = 'Created 10 Posts';

    public $slug = 'created-ten-posts';

    public $points = 10;

    /*
     * A small description for the achievement
     */
    public $description = '';

    public function whenUnlocked($progress)
    {
        Transaction::create([
            'operation' => $this->name,
            'amount' => 100,
            'user_id' => Auth::id()
        ]);
    }
}
