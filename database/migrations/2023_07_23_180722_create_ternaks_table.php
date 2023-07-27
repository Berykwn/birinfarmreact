<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ternaks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_jenis')->nullable();
            $table->unsignedBigInteger('id_ring')->nullable();
            $table->integer('jumlah_jantan');
            $table->integer('jumlah_betina');
            $table->string('foto')->nullable();
            $table->text('deskripsi')->nullable();
            $table->string('kode_ternak')->unique();
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('id_jenis')->references('id')->on('jenis_ternaks')->onDelete('cascade');
            $table->foreign('id_ring')->references('id')->on('rings')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ternaks');
    }
};