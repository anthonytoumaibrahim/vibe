<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class SendMessage implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $chatroomId;
    public $message;
    public $userId;
    public $log;

    /**
     * Create a new event instance.
     */
    public function __construct($chatroomId, $message, $userId, $log)
    {
        $this->chatroomId = $chatroomId;
        $this->message = $message;
        $this->userId = $userId;
        $this->log = $log;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return ['chat_' . $this->chatroomId];
    }

    public function broadcastAs()
    {
        return 'chatroom-message';
    }

    public function broadcastWith(): array
    {
        return [
            'chatroomId' => $this->chatroomId,
            'message' => $this->message,
            'userId' => $this->userId,
            'log' => $this->log
        ];
    }
}
