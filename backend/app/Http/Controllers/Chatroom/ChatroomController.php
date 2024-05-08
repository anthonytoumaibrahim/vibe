<?php

namespace App\Http\Controllers\Chatroom;

use App\Http\Controllers\Controller;
use App\Models\Chatroom;
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

    public function get($id)
    {
        $chatroom = Chatroom::findOrFail($id);
        return response()->json($chatroom);
    }
}
