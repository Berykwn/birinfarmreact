<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PemesananController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TernakController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;

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

Route::middleware('auth')->group(function () {
    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);

    Route::group(['middleware' => 'checkRole:admin'], function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/pesanan', [PemesananController::class, 'index'])->name('pesanan');
        Route::post('/confirmpesanan/{id}', [PemesananController::class, 'confirmPesanan'])->name('pesanan.confirm');
    });

    Route::group(['middleware' => 'checkRole:user'], function () {
        Route::get('/pemesanan', [PemesananController::class, 'pemesananPage'])->name('pemesanan');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        Route::post('/pemesanan', [PemesananController::class, 'handlePemesanan'])->name('pemesanan.create');
        Route::get('/transaksi', [PemesananController::class, 'Transaksi'])->name('transaksi');
        Route::get('/cetak', [PemesananController::class, 'cetakNota'])->name('cetakNota');
    });

});


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/ternak', [TernakController::class, 'ternakPage'])->name('ternak');
Route::get('/detailTernak', [TernakController::class, 'detailTernak'])->name('ternak.detail');


require __DIR__ . '/auth.php';