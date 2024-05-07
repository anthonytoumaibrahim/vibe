<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatroomParticipant extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'chatroom_id', 'present'];
}
