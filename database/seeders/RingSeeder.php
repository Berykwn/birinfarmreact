<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $randomNumber = mt_rand(1000000000, 9999999999); // Generate a random 10-digit number
        DB::table('rings')->insert([
            'kode' => 'BR_' . $randomNumber,
            'deskripsi' => \Faker\Factory::create()->sentence() // Using the Faker library to generate a random sentence
        ]);
    }
}