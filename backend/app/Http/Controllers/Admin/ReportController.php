<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function getAllReports()
    {
        $reports = Report::with('reportable', 'user')->orderBy('handled', 'desc')->get();
        return response()->json([
            'reports' => $reports
        ]);
    }

    public function getReport($id)
    {
        $report = Report::with('reportable', 'user')->findOrFail($id);
        return response()->json($report);
    }

    public function handleReport(Request $request)
    {
        $report = Report::findOrFail($request->report_id);
        $report->handled = true;
        $report->save();

        // Action
        switch ($request->action) {
            case "delete_post":
                $report->reportable->delete();
                break;
            case "delete_and_ban":
                $user = User::find($report->reportable->user->id);
                $user->active = false;
                $user->save();
                $report->reportable->delete();
                break;
        }

        return response()->json([
            'success' => true
        ]);
    }
}
