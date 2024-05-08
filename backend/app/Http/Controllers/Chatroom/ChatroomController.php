<?php

namespace App\Http\Controllers\Chatroom;

use App\Events\JoinChatroom;
use App\Events\SendMessage;
use App\Http\Controllers\Controller;
use App\Models\Chatroom;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class ChatroomController extends Controller
{
    public function create(Request $request)
    {
        $chatroom = new Chatroom();
        $chatroom->name = $request->name;
        $chatroom->host_id = Auth::id();
        $chatroom->expires_at = Carbon::now()->addHours(4);
        $chatroom->saveOrFail();

        return response()->json([
            'success' => true,
            'chatroom_id' => $chatroom->id
        ]);
    }

    public function getChatrooms()
    {
        $chatrooms = Chatroom::with('host:id,username')->get();
        return response()->json($chatrooms);
    }

    public function get($id)
    {
        $chatroom = Chatroom::findOrFail($id);
        return response()->json($chatroom);
    }

    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $chatroomId = $request->chatroom_id;
        $message = $request->message;
        broadcast(new SendMessage($chatroomId, $message))->toOthers();
    }

    public function joinChatroom(Request $request)
    {
        $chatroomId = $request->chatroom_id;
        broadcast(new JoinChatroom($chatroomId, Auth::id(), Auth::user()->username))->toOthers();
    }

    public function getParticipant($id)
    {
        $user = User::findOrFail($id);
        return response()->json([
            'id' => $user->id,
            'username' => $user->username,
            'character' => $user->character_data
        ]);
    }
}
