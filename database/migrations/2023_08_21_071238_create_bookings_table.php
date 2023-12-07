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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            //$table->unsignedBigInteger('customer_id');
           // $table->foreign('customer_id')->references('id')->on('users');
            $table->string('customer_name');
            $table->string('customer_email')->unique();
            $table->String('event_name');
            $table->date('event_date',0);
            $table->time('event_start_time');
            $table->time('event_end_time');
            $table->date('payment_date',0);
            $table->double('payment_total');
            $table->string('payment_method');

            $table->double('total_guests');
            $table->string('food');
            $table->double('food_price');
            $table->string('photography');
            $table->double('photography_price');

            //$table->string('file');

            //$table->string('image');

            $table->string('booking_status');

        
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
