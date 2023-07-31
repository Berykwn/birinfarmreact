<?php

namespace App\Http\Controllers;

use App\Http\Resources\BannerCollection;
use App\Http\Resources\TernakCollection;
use App\Models\Banner;
use App\Models\Jenis_ternak;
use App\Models\Ternak;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Banner $bannerModel, Ternak $ternakModel)
    {
        $banners = $bannerModel->latest()->get();
        $ternaks = $ternakModel->with(['jenis_ternak', 'rings'])->latest()->take(4)->get();

        return Inertia::render('Home', [
            'title' => 'Home',
            'pages' => 'home',
            'banner' => new BannerCollection($banners),
            'ternak' => new TernakCollection($ternaks),
            'jenis' => Jenis_ternak::latest()->get(),
        ]);
    }
}
