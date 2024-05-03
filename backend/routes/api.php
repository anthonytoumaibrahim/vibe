<?php

use App\Http\Controllers\AI\AICharacterGeneratorController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\OAuthController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Bio\BioController;
use App\Http\Controllers\User\CharacterController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    Route::middleware('auth:api')->get('/refresh', [AuthController::class, 'refresh']);
    Route::post('/signup', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/oauth', [OAuthController::class, 'OAuth']);
    Route::post('/check-username', [AuthController::class, 'checkUsername']);
    Route::post('/forgot-password', [PasswordController::class, 'reset']);
    Route::get('/forgot-password/{token}', [PasswordController::class, 'generate'])->name('password.reset');
});

Route::post('/ai', [AICharacterGeneratorController::class, 'generate']);

Route::middleware('auth:api')->group(function () {
    Route::prefix('/user')->group(function () {
        Route::get('/info', [UserController::class, 'getInfo']);
        Route::get('/profile/{username?}', [UserController::class, 'getProfile']);
        Route::post('/save-bio', [BioController::class, 'save']);

        Route::controller(CharacterController::class)->group(function () {
            Route::post('/save-character', 'save');
            Route::get('/get-character', 'get');
            Route::post('/buy-part', 'buyPart');
        });
    });
});
