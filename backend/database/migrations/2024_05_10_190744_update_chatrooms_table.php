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
        Schema::table('chatrooms', function (Blueprint $table) {
            $table->unsignedBigInteger('background_id')->after('name');
            $table->foreign('background_id')->references('id')->on('backgrounds')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chatrooms', function (Blueprint $table) {
            $table->dropColumn('background_id');
        });
    }
};
