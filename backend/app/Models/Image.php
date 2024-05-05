<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Image extends Model
{
    use HasFactory;

    protected $appends = ['src'];

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }

    public function src(): Attribute
    {
        return new Attribute(
            get: fn () => config('app.url') . "/storage" . $this->url,
        );
    }
}
