<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;
use Inertia\Inertia;
use App\Http\Resources\ArtikelCollection;
use illuminate\Support\Str;

class ArtikelController extends Controller
{
    //
    public function artikelPage()
    {
        $ternakData = Artikel::all();

        return Inertia::render('Artikel', [
            'title' => 'Artikel',
            'pages' => 'Artikel',
            'artikel' => new ArtikelCollection($artikelData),
        ]);
    }

    public function detailArtikel(Artikel $artikel, Request $request)
    {
        $getArtikelById = $artikel->with(['judul'])->find($request->id);

        return Inertia::render('DetailArtikel', [
            'title' => 'Artikel',
            'pages' => 'artikel',
            'artikelDetail' => $getArtikelById,
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artikel = Artikel::with(['judul'])->latest()->paginate(6);
        $allArtikel = Artikel::with(['jenis_ternak', 'rings'])->latest()->get();

        return Inertia::render('Admin/Ternak/Ternak', [
            'title' => 'Ternak',
            'pages' => 'Ternak',
            'ternak' => $ternak,
            'allTernak' => $allTernak
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Ternak/TambahTernak', [
            'title' => 'Tambah Ternak',
            'pages' => 'Ternak',
            'jenis' => Jenis_ternak::all(),
            'ring' => Ring::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(TernakRequest $request)
    {
        $validatedData = $request->validated();
        $foto = $validatedData['foto'];
        $fotoName = time() . '_' . Str::slug(pathinfo($foto->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $foto->getClientOriginalExtension();

        if (!$foto->storeAs('img/ternaks/', $fotoName)) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
        }

        Ternak::create(array_merge($validatedData, ['foto' => $fotoName]));

        return redirect()->route('dashboard.ternak')->with('message', 'Data berita berhasil ditambahkan.');
    }
}
