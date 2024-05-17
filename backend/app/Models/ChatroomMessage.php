<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ChatroomMessage extends Model
{
    use HasFactory;

    protected $appends = ['time_ago'];

    protected $with = ['user:id,username,avatar'];

    public function chatroom()
    {
        return $this->belongsTo(Chatroom::class);
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
}
