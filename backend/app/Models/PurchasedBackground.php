<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchasedBackground extends Model
{
    use HasFactory;

    public function background()
    {
        return $this->belongsTo('backgrounds');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
