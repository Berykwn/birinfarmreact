<?php

namespace Database\Seeders;

use Database\Factories\TernakFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ternak;

class TernakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Ternak::factory()->count(4)->create();
    }
}
