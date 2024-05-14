<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Report;
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
}
