<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Friend;
use App\Models\FriendRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FriendController extends Controller
{
    public function sendFriendRequest($id)
    {
        $user = User::find(Auth::id());
        // Already friends?
        if ($user->friends->contains($id)) {
            return response()->json([
                'success' => false,
                'message' => 'You are already friends with this user.'
            ]);
        }
        // Already sent request?
        if ($user->sentFriendRequests->contains('friend_id', $id)) {
            return response()->json([
                'success' => false,
                'message' => 'You already sent a request to this user.'
            ]);
        }

        $newFriend = new Friend();
        $newFriend->user_id = $user->id;
        $newFriend->friend_id = $id;
        $newFriend->status = 'pending';
        $user->sentFriendRequests()->save($newFriend);


        return response()->json([
            'success' => true,
            'message' => 'Your friend request has been sent.'
        ]);
    }

    public function handleFriendRequest(Request $request)
    {
        $user = User::find(Auth::id());
        $id = $request->id;
        $accepted = $request->boolean('accepted');

        if ($accepted) {
            Friend::where('user_id', $id)
                ->where('friend_id', $user->id)
                ->update(['status' => 'accepted']);
        } else {
            Friend::where('user_id', $id)
                ->where('friend_id', $user->id)
                ->delete();
        }
        return response()->json([
            'success' => true,
        ]);
    }
}
