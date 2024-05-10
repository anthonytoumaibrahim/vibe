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

class MoveAvatar implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $chatroomId;
    public $userId;
    public $x;
    public $y;

    /**
     * Create a new event instance.
     */
    public function __construct($chatroomId, $userId, $x, $y)
    {
        $this->chatroomId = $chatroomId;
        $this->userId = $userId;
        $this->x = $x;
        $this->y = $y;
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
        return 'chatroom-move';
    }

    public function broadcastWith(): array
    {
        return [
            'id' => $this->userId,
            'x' => $this->x,
            'y' => $this->y
        ];
    }
}
