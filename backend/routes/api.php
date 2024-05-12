<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\AI\AICharacterGeneratorController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\OAuthController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Bio\BioController;
use App\Http\Controllers\Chatroom\ChatroomController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\Post\PostCommentController;
use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\Post\PostLikeController;
use App\Http\Controllers\User\CharacterController;
use App\Http\Controllers\User\FeedController;
use App\Http\Controllers\User\FriendController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    Route::middleware('auth:api')->get('/refresh', [AuthController::class, 'refresh']);
    Route::middleware('auth:api')->get('/check-auth', [AuthController::class, 'checkAuth']);
    Route::post('/signup', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/oauth', [OAuthController::class, 'OAuth']);
    Route::post('/check-username', [AuthController::class, 'checkUsername']);
    Route::post('/forgot-password', [PasswordController::class, 'reset']);
    Route::get('/forgot-password/{token}', [PasswordController::class, 'generate'])->name('password.reset');
});

// TODO: Stripe webhook
// Route::post('/stripe-webhook', [PaymentController::class, 'webhook']);

Route::middleware('auth:api')->group(function () {
    // Admin Routes
    Route::prefix('/admin')->middleware(['role:admin'])->group(function () {
        Route::get('/users', [AdminController::class, 'getUsers']);
    });

    // User Routes
    Route::prefix('/user')->group(function () {
        Route::get('/premium-checkout', [PaymentController::class, 'premiumCheckout']);
        Route::get('/premium-items', [PaymentController::class, 'getPremiumItems']);
        Route::get('/checkout-success', [PaymentController::class, 'checkoutSuccess']);

        Route::get('/feed', [FeedController::class, 'getFeed']);

        Route::get('/info', [UserController::class, 'getInfo']);
        Route::get('/profile/{username?}', [UserController::class, 'getProfile']);
        Route::post('/save-bio', [BioController::class, 'save']);
        Route::post('/update-background', [UserController::class, 'updateBackground']);

        Route::controller(CharacterController::class)->group(function () {
            Route::post('/save-character', 'save');
            Route::get('/get-character', 'get');
            Route::post('/buy-part', 'buyPart');
        });
        Route::post('/generate-character', [AICharacterGeneratorController::class, 'generate']);

        Route::controller(PostController::class)->group(function () {
            Route::get('/posts/{id?}', 'getPosts');
            Route::delete('/post/{id}', 'delete');
            Route::post('/post', 'create');
        });
        Route::post('/post/like', [PostLikeController::class, 'addLike']);
        Route::post('/post-comment', [PostCommentController::class, 'create']);
        Route::delete('/post-comment/{id}', [PostCommentController::class, 'delete']);

        Route::get('/send-request/{id}', [FriendController::class, 'sendFriendRequest']);
        Route::get('/unfriend/{friendId}', [FriendController::class, 'unfriend']);
        Route::post('/handle-request', [FriendController::class, 'handleFriendRequest']);

        Route::controller(ChatroomController::class)->group(function () {
            Route::get('/chatrooms', 'getChatrooms');
            Route::post('/create-chatroom', 'create');
            Route::get('/chatroom/{id}', 'get');
            Route::post('/message-chatroom', 'sendMessage');
            Route::post('/move-avatar', 'moveAvatar');
            Route::post('/join-chatroom', 'joinChatroom');
            Route::post('/leave-chatroom', 'leaveChatroom');
            Route::get('/get-participant/{id}', 'getParticipant');
        });
    });
});
