<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TernakFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $randomNumber = mt_rand(1000000000, 9999999999); // Generate a random 10-digit number
        return [
            'id_jenis' => 1,
            'id_ring' => 1,
            'nama' => fake()->name(),
            'jumlah_jantan' => rand(1, 50),
            'jumlah_betina' => rand(1, 50),
            'foto' => 'default.png',
            'deskripsi' => fake()->sentence(),
            'kode_ternak' => 'TR_' . $randomNumber
        ];
    }
}
