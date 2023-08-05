<?php

namespace App\Http\Controllers;

use App\Models\Jenis_ternak;
use App\Models\Pemesanan;
use App\Models\Ternak;
use App\Models\Ring;
use App\Http\Resources\TernakCollection;
use App\Http\Requests\PemesananRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemesananController extends Controller
{
    public function pemesananPage()
    {
        $ternaks = Ternak::with(['jenis_ternak', 'rings'])->latest()->get();

        return Inertia::render('Pemesanan', [
            'title' => 'Pemesanan',
            'pages' => 'pemesanan',
            'ternakData' => new TernakCollection($ternaks)
        ]);
    }

    public function handlePemesanan(PemesananRequest $request)
    {
        $validatedData = $request->validated();
        Pemesanan::create($validatedData);
        return redirect()->route('transaksi')->with('message', 'Pemesanan sedang di proses! silahkan cetak nota dan hubungi admin untuk memproses pesanan..');
    }

    public function transaksi()
    {
        $userId = Auth::id();

        $transactions = Pemesanan::with(['ternak', 'users'])
            ->where('id_users', $userId)
            ->latest()
            ->get();

        return Inertia::render('Transaksi', [
            'title' => 'Transaksi',
            'pages' => 'Transaksi',
            'transactions' => $transactions,
        ]);
    }

    public function cetakNota(Pemesanan $pemesanan, Request $request)
    {
        $notaData = $pemesanan->with(['ternak', 'users'])->find($request->id);

        $jenis = Jenis_ternak::where('id', $notaData->ternak->id_jenis)->first();

        $ring = Ring::where('id', $notaData->ternak->id_ring)->first();

        return Inertia::render('CetakNota', [
            'notaData' => $notaData,
            'jenis' => $jenis,
            'ring' => $ring,
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pesanan = Pemesanan::with(['ternak', 'users'])->latest()->paginate(10);
        $allPesanan = Pemesanan::with(['ternak', 'users'])->latest()->get();

        return Inertia::render('Admin/Pesanan/Pesanan', [
            'title' => 'Pesanan',
            'pages' => 'Pesanan',
            'pesanan' => $pesanan,
            'allPesanan' => $allPesanan,
        ]);
    }

    public function chartData()
    {
    }

    public function confirmPesanan(Request $request, $id)
    {
        $pesanan = Pemesanan::findOrFail($id);

        $pesanan->update([
            'status' => $request->input('status')
        ]);

        return redirect()->route('dashboard.pesanan')->with('message', 'Status pesanan berhasil diupdate.');
    }

    public function tolakPesanan(Request $request, $id)
    {
        $pesanan = Pemesanan::findOrFail($id);

        $pesanan->status = 'Ditolak';

        $pesanan->save();

        return redirect('pesanan')->with('message', 'Pesanan telah di Tolak!');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function show(Pemesanan $pemesanan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function edit(Pemesanan $pemesanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pemesanan $pemesanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pemesanan $pemesanan)
    {
        //
    }
}
