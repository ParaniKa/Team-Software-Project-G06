<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('auspicious', function (Blueprint $table) {
            $table->id();
            $table->date('auspicious_date',0);
            $table->string('auspicious_day');
            $table->time('auspicious_time_start');
            $table->time('auspicious_time_end');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auspicious');
    }
};
