<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller
{
    public function report(Request $request)
    {
        // TODO: Add other report types
        $post = Post::findOrFail($request->post_id);

        // Already reported
        if ($post->reports->count() > 0) {
            return response()->json([
                'success' => false,
                'message' => 'This post has already been reported.'
            ]);
        }

        $report = new Report();
        $report->user_id = Auth::id();
        $report->reason = $request->reason;

        $post->reports()->save($report);

        return response()->json([
            'success' => true,
            'message' => 'Thank you for your report.'
        ]);
    }
}
