<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function getAllReports()
    {
        $reports = Report::orderBy('handled', false)->get();
        return response()->json([
            'reports' => $reports
        ]);
    }
}
