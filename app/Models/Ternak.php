<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ternak extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'id_jenis',
        'id_ring',
        'jumlah_jantan',
        'jumlah_betina',
        'foto',
        'deskripsi',
        'kode_ternak',
    ];

    public function jenis_ternak()
    {
        return $this->belongsTo(Jenis_Ternak::class, 'id_jenis')->select('id', 'nama');
    }
    
    public function rings()
    {
        return $this->belongsTo(Ring::class, 'id_ring')->select('id', 'kode');
    }

}