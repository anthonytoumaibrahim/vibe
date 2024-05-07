<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chatroom extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'host_id', 'expires_at', 'active'];

    public function host()
    {
        return $this->belongsTo(User::class, 'host_id', 'id');
    }

    public function participants()
    {
        return $this->hasMany(ChatroomParticipant::class);
    }
}
