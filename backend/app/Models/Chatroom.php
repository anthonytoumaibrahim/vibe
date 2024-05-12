<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Chatroom extends Model
{
    use HasFactory;

    protected $appends = ['expires_in', 'participants_count', 'is_host'];

    protected $with = ['background:id,image_url'];

    protected $fillable = ['name', 'host_id', 'expires_at', 'active'];

    public function host()
    {
        return $this->belongsTo(User::class, 'host_id', 'id');
    }

    public function participants()
    {
        return $this->hasMany(ChatroomParticipant::class);
    }

    public function isHost(): Attribute
    {
        return new Attribute(
            get: fn () => $this->host->id === Auth::id(),
        );
    }

    public function expiresIn(): Attribute
    {
        return new Attribute(
            get: fn () => Carbon::parse($this->expires_at)->diffForHumans(),
        );
    }

    public function background()
    {
        return $this->belongsTo(Background::class);
    }

    public function participantsCount(): Attribute
    {
        return new Attribute(
            get: fn () => $this->participants()->count(),
        );
    }
}
