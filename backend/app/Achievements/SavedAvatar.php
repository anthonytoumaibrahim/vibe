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
class SavedAvatar extends Achievement
{
    /*
     * The achievement name
     */
    public $name = 'Saved Avatar for the first time';

    public $slug = 'saved-avatar';

    /*
     * A small description for the achievement
     */
    public $description = 'You look great!';

    public function whenUnlocked($progress)
    {
        Transaction::create([
            'operation' => $this->name,
            'amount' => 40,
            'user_id' => Auth::id()
        ]);
    }
}
