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
        Schema::table('backgrounds', function (Blueprint $table) {
            $table->boolean('chatroom_bg')->after('image_url')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('backgrounds', function (Blueprint $table) {
            $table->dropColumn('chatroom_bg');
        });
    }
};
