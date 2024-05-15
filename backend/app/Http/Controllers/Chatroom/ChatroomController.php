<?php

namespace App\Http\Controllers\Chatroom;

use App\Models\User;
use App\Models\Chatroom;
use App\Events\MoveAvatar;
use App\Models\Background;
use App\Events\SendMessage;
use App\Models\Transaction;
use App\Events\JoinChatroom;
use Illuminate\Http\Request;
use App\Events\LeaveChatroom;
use Illuminate\Support\Carbon;
use App\Models\ChatroomParticipant;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ChatroomController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:20',
            'background_id' => 'required|exists:backgrounds,id'
        ]);
        $chatroom = new Chatroom();
        $chatroom->name = $request->name;
        $chatroom->host_id = Auth::id();
        $chatroom->expires_at = Carbon::now()->addHours(4);
        $chatroom->background_id = $request->background_id;
        $chatroom->private = $request->boolean('private');
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
        $backgrounds = Background::where('chatroom_bg', true)->get();
        return response()->json([
            'chatrooms' => $chatrooms,
            'backgrounds' => $backgrounds
        ]);
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
        $user = User::find(Auth::id());
        $chatroom = Chatroom::findOrFail($chatroomId);

        $participant = $chatroom->participants()->where('user_id', $user->id)->first();

        if ($participant) {
            $participant->delete();
        }
        broadcast(new LeaveChatroom($chatroomId, $user->id, $user->username))->toOthers();
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
            'character' => $user->character_data,
            'is_owner' => $user->is_owner,
            'is_friend' => $user->is_friend
        ];
        if (!$json) {
            return $userArr;
        }
        return response()->json($userArr);
    }
}
