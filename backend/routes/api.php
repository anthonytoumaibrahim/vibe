<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\OAuthController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\User\CharacterController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    Route::middleware('auth:api')->get('/refresh', [AuthController::class, 'refresh']);
    Route::post('/signup', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/oauth', [OAuthController::class, 'OAuth']);
    Route::post('/check-username', [AuthController::class, 'checkUsername']);
    Route::post('/forgot-password', [PasswordController::class, 'reset']);
    Route::get('/forgot-password/{token}', [PasswordController::class, 'generate'])->name('password.reset');
});

Route::middleware('auth:api')->group(function () {
    Route::get('/user-info', [UserController::class, 'getUserInfo']);

    Route::prefix('/user')->group(function () {
        Route::post('/save-character', [CharacterController::class, 'save']);
        Route::get('/get-character', [CharacterController::class, 'get']);
    });
});
