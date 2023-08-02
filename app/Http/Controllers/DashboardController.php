<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $chartData = [
            'labels' => ['January', 'February', 'March', 'April', 'May'],
            'datasets' => [
                [
                    'label' => 'Sample Data',
                    'data' => [
                        ['x' => 'January', 'y' => 10],
                        ['x' => 'February', 'y' => 30],
                        ['x' => 'March', 'y' => 15],
                        ['x' => 'April', 'y' => 25],
                        ['x' => 'May', 'y' => 20],
                    ],
                    'backgroundColor' => '#36A2EB',
                ],
            ],
        ];
    
        return Inertia::render('Dashboard', [
            'title' => 'Dashboard',
            'pages' => 'dashboard',
            'chartData' => $chartData
        ]);
    }
}