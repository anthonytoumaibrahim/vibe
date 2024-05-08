<?php

namespace App\Http\Controllers\Chatroom;

use App\Http\Controllers\Controller;
use App\Models\Chatroom;
use Illuminate\Http\Request;

class ChatroomController extends Controller
{
    public function create(Request $request)
    {
        $chatroom = new Chatroom();
        $chatroom->name = $request->name;
        $chatroom->saveOrFail();

        return response()->json([
            'success' => true,
            'chatroom_id' => $chatroom->id
        ]);
    }
}
