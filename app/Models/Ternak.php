<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ternak extends Model
{
    use HasFactory;

    public function jenis_ternak()
    {
        return $this->belongsTo(Jenis_Ternak::class, 'id_jenis');
    }
    
    public function rings()
    {
        return $this->belongsTo(Ring::class, 'id_ring');
    }

}