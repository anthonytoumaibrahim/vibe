<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    use HasFactory;

    public $appends = ['time_ago', 'likes_count', 'comments_count', 'liked_by_user', 'is_owner'];

    public $with = ['images', 'comments', 'user:id,username,avatar'];

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

    public function likedByUser(): Attribute
    {
        return new Attribute(
            get: fn () => $this->likes()->where('user_id', Auth::id())->exists(),
        );
    }

    public function likesCount(): Attribute
    {
        return new Attribute(
            get: fn () => $this->likes()->where('dislike', false)->count(),
        );
    }

    public function commentsCount(): Attribute
    {
        return new Attribute(
            get: fn () => $this->comments()->count(),
        );
    }

    // public function dislikesCount(): Attribute
    // {
    //     return new Attribute(
    //         get: fn () => $this->likes()->where('dislike', true)->count(),
    //     );
    // }

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

    public function reports(): MorphMany
    {
        return $this->morphMany(Report::class, 'reportable');
    }
}
