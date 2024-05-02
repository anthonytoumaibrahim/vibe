<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CharacterPart extends Model
{
    use HasFactory;

    protected $fillable = ['client_id', 'type', 'ai_description', 'premium', 'price', 'default'];

    public function purchasedBy()
    {
        return $this->hasMany(PurchasedCharacterPart::class, 'part_id');
    }

    public function toArray()
    {
        $array = parent::toArray();
        $array['id'] = $array['client_id'];
        unset($array['client_id']);

        return $array;
    }
}
