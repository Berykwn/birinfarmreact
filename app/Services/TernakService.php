<?php

namespace App\Services;

use App\Models\Ternak;

class TernakService
{
    public function getTernakPaginate($perPage)
    {
        return Ternak::with(['jenis_ternak', 'rings'])->latest()->paginate($perPage);
    }


    public function getAllTernakWithRelations()
    {
        return Ternak::with(['jenis_ternak', 'rings'])->latest()->get();
    }

    public function getTernakById($id)
    {
        return Ternak::with(['jenis_ternak', 'rings'])->find($id);
    }
}