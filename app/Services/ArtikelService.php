<?php

namespace App\Services;

use App\Models\Artikel;

class ArtikelService
{
    public function getArtikelPaginate($perPage)
    {
        return Artikel::latest()->paginate($perPage);
    }

    public function getAllArtikel()
    {
        return Artikel::latest()->get();
    }

    public function getArtikelById($id)
    {
        return Artikel::find($id);
    }
}