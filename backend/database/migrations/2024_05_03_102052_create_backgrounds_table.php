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
        Schema::create('backgrounds', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('image_url');
            $table->boolean('premium')->default(false);
            $table->integer('price')->default(0);
            $table->timestamps();
        });

        Schema::create('purchased_backgrounds', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('background_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('background_id')->references('id')->on('backgrounds')->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('backgrounds');
        Schema::dropIfExists('purchased_backgrounds');
    }
};
