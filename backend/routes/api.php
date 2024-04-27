<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\OAuthController;
use App\Http\Controllers\Auth\PasswordController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    Route::post('/signup', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/oauth', [OAuthController::class, 'OAuth']);
    Route::post('/check-username', [AuthController::class, 'checkUsername']);
    Route::post('/forgot-password', [PasswordController::class, 'reset']);
    Route::get('/forgot-password/{token}', [PasswordController::class, 'generate'])->name('password.reset');
});
