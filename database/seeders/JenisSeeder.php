<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JenisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jenis_ternaks')->insert([
            'nama' => 'Abon'
        ]);
        DB::table('jenis_ternaks')->insert([
            'nama' => 'Karkas'
        ]);
        DB::table('jenis_ternaks')->insert([
            'nama' => 'Lele'
        ]);
        DB::table('jenis_ternaks')->insert([
            'nama' => 'Pitik'
        ]);
    }
}
