<?php

namespace App\Http\Controllers;

use App\Models\Pemesanan;
use App\Models\Ternak;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $chartData = $this->generateChartData();

        $totalData = [
            'pesanan' => [
                'name' => 'Pesanan',
                'total' => Pemesanan::count(),
                'latest' => Pemesanan::latest('updated_at')->first(['updated_at']),
                'icon' => 'MdStorefront',
            ],
            'ternak' => [
                'name' => 'Ternak',
                'total' => Ternak::count(),
                'latest' => Ternak::latest('updated_at')->first(['updated_at']),
                'icon' => 'MdOutlineWarehouse',
            ],
            'users' => [
                'name' => 'Users',
                'total' => User::count(),
                'latest' => User::latest('updated_at')->first(['updated_at']),
                'icon' => 'MdSupervisorAccount',
            ],
        ];

        $latestOrders = Pemesanan::with(['ternak', 'users'])
            ->orderByDesc('updated_at')
            ->take(4)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'pages' => [
                'title' => 'Dashboard',
                'name' => 'Dashboard',
                'url' => 'dashboard'
            ],
            'totalData' => $totalData,
            'chartData' => $chartData,
            'latestOrder' => $latestOrders,
        ]);
    }

    private function generateChartData()
    {
        $monthlyData = DB::table('pemesanans')
            ->selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupByRaw('MONTH(created_at)')
            ->get();

        $monthCounts = array_fill(1, 12, 0);
        foreach ($monthlyData as $data) {
            $monthCounts[$data->month] = $data->count;
        }

        $labels = [];
        $data = [];
        for ($i = 1; $i <= 12; $i++) {
            $monthName = date('F', mktime(0, 0, 0, $i, 1));
            $labels[] = $monthName;
            $data[] = $monthCounts[$i];
        }

        $chartData = [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Pemesanan',
                    'data' => $data,
                    'borderColor' => '#e5e5e5',
                    'backgroundColor' => '#22c55e',
                ],
            ],
        ];

        return $chartData;
    }
}