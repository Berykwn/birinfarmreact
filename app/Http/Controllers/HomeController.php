<?php

namespace App\Http\Controllers;

use App\Http\Resources\BannerCollection;
use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    private function fetchBannerData() {
        $this->banner = Banner::latest()->get();
    }
    public function index() {
        $this->fetchBannerData();

        return Inertia::render('Home', [
            'title' => 'Home',
            'pages' => 'Home',
            'banner' => new BannerCollection($this->banner)
        ]);
    }
}
