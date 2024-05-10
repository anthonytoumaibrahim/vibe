<?php

namespace App\Http\Controllers\Chatroom;

use App\Events\JoinChatroom;
use App\Events\LeaveChatroom;
use App\Events\MoveAvatar;
use App\Events\SendMessage;
use App\Http\Controllers\Controller;
use App\Models\Chatroom;
use App\Models\ChatroomParticipant;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class ChatroomController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:20'
        ]);
        $chatroom = new Chatroom();
        $chatroom->name = $request->name;
        $chatroom->host_id = Auth::id();
        $chatroom->expires_at = Carbon::now()->addHours(4);
        $chatroom->saveOrFail();

        $transaction = new Transaction();
        $transaction->operation = "Created Chat Room";
        $transaction->amount = -100;
        $transaction->user_id = Auth::id();
        $transaction->save();

        return response()->json([
            'success' => true,
            'chatroom_id' => $chatroom->id
        ]);
    }

    public function getChatrooms()
    {
        $chatrooms = Chatroom::with('host:id,username')->where('expires_at', '>=', Carbon::now())->get();
        return response()->json($chatrooms);
    }

    public function get($id)
    {
        $chatroom = Chatroom::with('host:id,username')->findOrFail($id);
        $chatroom->users = $chatroom->participants()->get()->map(function ($participant) {
            return [
                ...$this->getParticipant($participant->user_id, false),
                'x' => $participant->x,
                'y' => $participant->y
            ];
        });
        $chatroom->logged_in_id = Auth::id();
        return response()->json($chatroom);
    }

    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $chatroomId = $request->chatroom_id;
        $message = $request->message;
        broadcast(new SendMessage($chatroomId, $message, $user->id))->toOthers();
    }

    public function joinChatroom(Request $request)
    {
        $chatroomId = $request->chatroom_id;
        $userId = Auth::id();
        $chatroom = Chatroom::findOrFail($chatroomId);

        if (!$chatroom->participants()->where('user_id', $userId)->exists()) {
            $participant = new ChatroomParticipant();
            $participant->user_id = Auth::id();
            $participant->chatroom_id = $chatroomId;
            $participant->save();
            broadcast(new JoinChatroom($chatroomId, $userId, Auth::user()->username))->toOthers();
        }
    }

    public function leaveChatroom(Request $request)
    {
        $chatroomId = $request->chatroom_id;
        $userId = Auth::id();
        $chatroom = Chatroom::findOrFail($chatroomId);

        $participant = $chatroom->participants()->where('user_id', $userId)->first();

        if ($participant) {
            $participant->delete();
        }
        broadcast(new LeaveChatroom($chatroomId, $userId))->toOthers();
    }

    public function moveAvatar(Request $request)
    {
        $chatroomId = $request->chatroom_id;
        $x = $request->x;
        $y = $request->y;
        $userId = Auth::id();
        $chatroom = Chatroom::findOrFail($chatroomId);

        $participant = $chatroom->participants()->where('user_id', $userId)->first();
        $participant->x = $x;
        $participant->y = $y;
        $participant->save();

        broadcast(new MoveAvatar($chatroomId, $userId, $x, $y))->toOthers();
    }

    public function getParticipant($id, $json = true)
    {
        $user = User::findOrFail($id);
        $userArr = [
            'id' => $user->id,
            'username' => $user->username,
            'character' => $user->character_data
        ];
        if (!$json) {
            return $userArr;
        }
        return response()->json($userArr);
    }
}
