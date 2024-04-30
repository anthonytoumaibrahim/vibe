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
        Schema::create('profile_comments', function (Blueprint $table) {
            $table->id();
            $table->string('comment');
            $table->unsignedBigInteger('profile_id');
            $table->unsignedBigInteger('commenter_id');
            $table->unsignedBigInteger('parent_comment_id')->nullable();
            $table->timestamps();

            $table->foreign('profile_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('commenter_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('parent_comment_id')->references('id')->on('profile_comments')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_comments');
    }
};
