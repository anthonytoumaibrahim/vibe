<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Post extends Model
{
    use HasFactory;

    public $appends = ['time_ago', 'likes_count', 'dislikes_count'];

    public $with = ['images', 'user:id,username,avatar'];

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

    public function likesCount(): Attribute
    {
        return new Attribute(
            get: fn () => $this->likes()->where('dislike', false)->count(),
        );
    }

    public function dislikesCount(): Attribute
    {
        return new Attribute(
            get: fn () => $this->likes()->where('dislike', true)->count(),
        );
    }

    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function likes(): MorphMany
    {
        return $this->morphMany(Like::class, 'likeable');
    }
}
