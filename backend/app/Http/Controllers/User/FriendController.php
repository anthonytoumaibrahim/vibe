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
        $alreadySent = $user->sentFriendRequests()->where('requested_id', $id)->first();
        if ($alreadySent) {
            return response()->json([
                'success' => false,
                'message' => 'You already sent a friend request to this user.'
            ]);
        }
        $friendRequest = new FriendRequest();
        $friendRequest->requester_id = $user->id;
        $friendRequest->requested_id = $id;
        $friendRequest->saveOrFail();

        return response()->json([
            'success' => true,
            'message' => 'Your friend request has been sent.'
        ]);
    }

    public function handleFriendRequest(Request $request)
    {
        $user = User::find(Auth::id());
        $requestId = $request->id;
        $accepted = $request->boolean('accepted');
        $friendRequest = FriendRequest::where('requester_id', $requestId)->where('requested_id', $user->id)->first();
        $friendRequest->accepted = $accepted ? true : false;
        $friendRequest->save();

        // Already friends?
        $checkRelationship = $user->friends()->where('user2_id', $requestId)->exists();
        if ($checkRelationship) {
            return response()->json([
                'success' => false,
                'message' => 'You\'re already friends with this user.'
            ]);
        }

        // Add friend
        $friend = new Friend();
        $friend->user1_id = $user->id;
        $friend->user2_id = $friendRequest->requester_id;
        $friend->saveOrFail();

        return response()->json([
            'success' => true
        ]);
    }
}
