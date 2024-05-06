<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
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
}
