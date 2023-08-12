<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $monthlyData = DB::select('SELECT MONTH(created_at) as month, COUNT(*) as count FROM pemesanans GROUP BY MONTH(created_at)');

        $chartData = [
            'labels' => [],
            'datasets' => [
                [
                    'label' => 'Sample Data',
                    'data' => [],
                    'borderColor' => '#36A2EB',
                    'backgroundColor' => 'rgba(54, 162, 235, 0.5)',
                ],
            ],
        ];

        $monthCounts = array_fill(1, 12, 0);
        foreach ($monthlyData as $data) {
            $monthNumber = $data->month;
            $count = $data->count;
            $monthCounts[$monthNumber] = $count;
        }

        $labels = [];
        $data = [];
        for ($i = 1; $i <= 12; $i++) {
            $monthName = date('F', mktime(0, 0, 0, $i, 1));
            $labels[] = $monthName;
            $data[] = $monthCounts[$i];
        }

        $chartData['labels'] = $labels;
        $chartData['datasets'][0]['data'] = $data;

        return Inertia::render('Dashboard', [
            'title' => 'Dashboard',
            'pages' => 'Dashboard',
            'chartData' => $chartData,
        ]);
    }
}