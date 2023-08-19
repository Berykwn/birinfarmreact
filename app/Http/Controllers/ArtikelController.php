<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use App\Services\ArtikelService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    protected $artikelService;

    public function __construct(ArtikelService $artikelService)
    {
        $this->artikelService = $artikelService;
    }

    public function getArtikel() {
        $artikel = $this->artikelService->getArtikelPaginate(4);
        $allArtikel = $this->artikelService->getAllArtikel();

        return Inertia::render('Artikel', [
            'pages' => [
                'title' => 'Artikel',
                'name' => 'Artikel',
                'url' => 'artikel'
            ],
            'artikel' => $artikel,
            'allArtikel' => $allArtikel,
        ]);
    }

    public function index()
    {
        $artikel = $this->artikelService->getArtikelPaginate(8);
        $allArtikel = $this->artikelService->getAllArtikel();

        return Inertia::render('Admin/Artikel/Artikel', [
            'pages' => [
                'title' => 'Artikel',
                'name' => 'Artikel',
                'url' => 'artikel'
            ],
            'artikel' => $artikel,
            'allArtikel' => $allArtikel,
        ]);
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
     * @param  \App\Models\Artikel  $artikel
     * @return \Illuminate\Http\Response
     */
    public function show(Artikel $artikel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Artikel  $artikel
     * @return \Illuminate\Http\Response
     */
    public function edit(Artikel $artikel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Artikel  $artikel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Artikel $artikel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Artikel  $artikel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Artikel $artikel)
    {
        //
    }
}