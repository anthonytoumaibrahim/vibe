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
        Schema::create('character_parts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('client_id');
            $table->string('type');
            $table->text('ai_description')->nullable();
            $table->boolean('premium')->default(false);
            $table->integer('price')->default(0);
            $table->boolean('default')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('character_parts');
    }
};
