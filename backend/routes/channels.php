<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('user.{userId}', function ($user, $userId) {
    if ($user->id === $userId) {
        return array('name' => $user->username);
    }
});

Broadcast::channel('my-channel', function () {
    return true;
});
