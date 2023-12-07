<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return Auth::user();
});



use App\Http\Controllers\Api\Auth\AuthenticationController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Auth\ForgotpasswordController;

Route::get('users', function(){
    return User::all();
});

Route::group(['namespace'=>'Api\Auth'], function(){
    Route::post('login', [AuthenticationController::class, 'login']);
    Route::post('logout', [AuthenticationController::class, 'logout'])->middleware('auth:api');
    Route::post('register', [RegisterController::class, 'register']);
    Route::post('forgot', [ForgotpasswordController::class, 'forgot']);
    Route::post('reset', 'ForgotPasswordController@reset');
});


use App\Http\Controllers\EventController;
Route::post('event/store', [EventController::class, 'store']);
Route::get('event/index', [EventController::class, 'index']);
Route::get('event/show/{id}', [EventController::class, 'show']);
Route::put('event/update/{id}', [EventController::class, 'update']);
Route::delete('event/delete/{id}', [EventController::class, 'delete']);
Route::post('event/mailsending', [EventController::class, 'mailsending']);


use App\Http\Controllers\BookingController;
Route::post('booking/store', [BookingController::class, 'store']);
Route::get('booking/index', [BookingController::class, 'index']);
Route::get('booking/show/{id}', [BookingController::class, 'show']);
Route::put('booking/update/{id}', [BookingController::class, 'update']);
Route::delete('booking/delete/{id}', [BookingController::class, 'delete']);
Route::post('booking/imageUpload', [BookingController::class, 'imageUpload']);
Route::post('booking/file',[BookingController::class, 'fileUpload']);

use App\Http\Controllers\UserController;
Route::post('user/store', [UserController::class, 'store']);
Route::get('user/index', [UserController::class, 'index']);
Route::get('user/show/{id}', [UserController::class, 'show']);
Route::put('user/update/{id}', [UserController::class, 'update']);
Route::delete('user/delete/{id}', [UserController::class, 'delete']);



use App\Http\Controllers\FoodController;
Route::post('food/store', [FoodController::class, 'store']);
Route::get('food/index', [FoodController::class, 'index']);
Route::get('food/show/{id}', [FoodController::class, 'show']);
Route::put('food/update/{id}', [FoodController::class, 'update']);
Route::delete('food/delete/{id}', [FoodController::class, 'delete']);


use App\Http\Controllers\PhotographyController;
Route::post('photography/store', [PhotographyController::class, 'store']);
Route::get('photography/index', [PhotographyController::class, 'index']);
Route::get('photography/show/{id}', [PhotographyController::class, 'show']);
Route::put('photography/update/{id}', [PhotographyController::class, 'update']);
Route::delete('photography/delete/{id}', [PhotographyController::class, 'delete']);

use App\Http\Controllers\AuspiciouController;
Route::post('auspiciou/store', [AuspiciouController::class, 'store']);
Route::get('auspiciou/index', [AuspiciouController::class, 'index']);
Route::get('auspiciou/show/{id}', [AuspiciouController::class, 'show']);
Route::put('auspiciou/update/{id}', [AuspiciouController::class, 'update']);
Route::delete('auspiciou/delete/{id}', [AuspiciouController::class, 'delete']);


use App\Http\Controllers\AuspiciousController;
Route::post('auspicious/store', [AuspiciousController::class, 'store']);
Route::get('auspicious/index', [AuspiciousController::class, 'index']);
Route::get('auspicious/show/{id}', [AuspiciousController::class, 'show']);
Route::put('auspicious/update/{id}', [AuspiciousController::class, 'update']);
Route::delete('auspicious/delete/{id}', [AuspiciousController::class, 'delete']);


use App\Http\Controllers\ContactController;
Route::post('contact/store', [ContactController::class, 'store']);
Route::get('contact/index', [ContactController::class, 'index']);
Route::get('contact/show/{id}', [ContactController::class, 'show']);
//Route::put('auspicious/update/{id}', [AuspiciousController::class, 'update']);
Route::delete('contact/delete/{id}', [ContactController::class, 'delete']);



use App\Http\Controllers\FeedbackController;
Route::post('feedback/store', [FeedbackController::class, 'store']);
Route::get('feedback/index', [FeedbackController::class, 'index']);
Route::get('feedback/show/{id}', [FeedbackController::class, 'show']);
//Route::put('auspicious/update/{id}', [AuspiciousController::class, 'update']);
Route::delete('feedback/delete/{id}', [FeedbackController::class, 'delete']);


use App\Http\Controllers\SubscribeController;
Route::post('subscribe/store', [SubscribeController::class, 'store']);
Route::get('subscribe/index', [SubscribeController::class, 'index']);
Route::get('subscribe/show/{id}', [SubscribeControllerr::class, 'show']);
//Route::put('auspicious/update/{id}', [AuspiciousController::class, 'update']);
Route::delete('subscribe/delete/{id}', [SubscribeController::class, 'delete']);



use App\Http\Controllers\CalendarController;
Route::post('calendar/store', [CalendarController::class, 'store']);
Route::get('calendar/index', [CalendarController::class, 'index']);
Route::get('calendar/show/{id}', [CalendarController::class, 'show']);
Route::put('calendar/update/{id}', [CalendarController::class, 'update']);
Route::delete('calendar/delete/{id}', [CalendarController::class, 'delete']);





