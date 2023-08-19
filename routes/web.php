<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PemesananController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TernakController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::group(['middleware' => 'checkRole:admin'], function () {
        Route::prefix('dashboard')->group(function () {
            Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
            Route::get('/pesanan', [PemesananController::class, 'index'])->name('dashboard.pesanan');
            Route::post('/pesanan/confirm/{id}', [PemesananController::class, 'confirmPesanan'])->name('pesanan.confirm');

            Route::get('/ternak', [TernakController::class, 'index'])->name('dashboard.ternak');
            Route::get('/ternak/tambah', [TernakController::class, 'create'])->name('dashboard.ternak.create');
            Route::get('/ternak/edit', [TernakController::class, 'edit'])->name('dashboard.ternak.edit');
            Route::post('/ternak/store', [TernakController::class, 'store'])->name('dashboard.ternak.store');
            Route::post('/ternak/update/{id}', [TernakController::class, 'update'])->name('dashboard.ternak.update');
            Route::post('/ternak/delete/{id}', [TernakController::class, 'destroy'])->name('dashboard.ternak.destroy');

            Route::get('/artikel', [ArtikelController::class, 'index'])->name('artikel');
        });
    });

    Route::group(['middleware' => 'checkRole:user'], function () {
        Route::get('/pemesanan', [PemesananController::class, 'pemesananPage'])->name('pemesanan');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        Route::post('/pemesanan', [PemesananController::class, 'handlePemesanan'])->name('pemesanan.create');
        Route::get('/transaksi', [PemesananController::class, 'Transaksi'])->name('transaksi');
        Route::get('/cetak', [PemesananController::class, 'cetakNota'])->name('cetakNota');
    });
});



Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/ternak', [TernakController::class, 'ternakPage'])->name('ternak');
Route::get('/detailTernak', [TernakController::class, 'detailTernak'])->name('ternak.detail');
Route::get('/artikel', [ArtikelController::class, 'getArtikel'])->name('artikel');


require __DIR__ . '/auth.php';