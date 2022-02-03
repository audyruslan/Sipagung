<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHasilHamasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hasil_hamas', function (Blueprint $table) {
            $table->id();
            $table->string('tanggal');
            $table->text('hama');
            $table->text('gejala_hama');
            $table->integer('hasil_id');
            $table->string('hasil_nilai');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hasil_hamas');
    }
}
