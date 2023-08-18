<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ring extends Model
{
    use HasFactory;

    public function ternak()
    {
        return $this->hasMany(Ternak::class);
    }
}
