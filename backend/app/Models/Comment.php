<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

    public $appends = ['time_ago', 'is_owner'];

    protected $with = ['user:id,username,avatar'];

    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }

    public function likes(): MorphMany
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function timeAgo(): Attribute
    {
        return new Attribute(
            get: fn () => Carbon::parse($this->created_at)->diffForHumans(),
        );
    }

    public function isOwner(): Attribute
    {
        return new Attribute(
            get: fn () => $this->user_id === Auth::id(),
        );
    }
}
