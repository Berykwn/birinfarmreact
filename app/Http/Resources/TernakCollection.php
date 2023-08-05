<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TernakCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];
    }

    // $ternakData = $this->collection->map(function ($item) {
    //     return [
    //         'id' => $item->id,
    //         'foto' => $item->foto,
    //         'nama' => $item->nama,
    //         'deskripsi' => $item->deskripsi,
    //         'kode_ternak' => $item->kode_ternak,
    //         'updated_at' => $item->updated_at,
    //     ];
    // });

    // return [
    //     'data' => $ternakData,
    // ];
}