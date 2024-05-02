<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchasedCharacterPart extends Model
{
    use HasFactory;

    public function part()
    {
        return $this->belongsTo('character_parts', 'part_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
