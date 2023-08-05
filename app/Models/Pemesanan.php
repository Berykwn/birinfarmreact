<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_ternak',
        'jumlah_jantan',
        'jumlah_betina',
        'id_users',
        'kontak',
        'alamat',
        'catatan',
        'status',
    ];

    public function ternak()
    {
        return $this->belongsTo(Ternak::class, 'id_ternak');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'id_users');
    }
}
