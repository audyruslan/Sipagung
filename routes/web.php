<?php

use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DoctorsController;
use App\Http\Controllers\Admin\GejalaController;
use App\Http\Controllers\Admin\GejalaHamaContoller;
use App\Http\Controllers\Admin\HamaController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\PengetahuanController;
use App\Http\Controllers\Admin\PenyakitController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\LoginController;
use App\Models\PengetahuanHama;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// default localhost:8000

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return inertia('About');
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'checklogin']);

Route::get('/register', [LoginController::class, 'register']);
Route::post('/register', [LoginController::class, 'insert']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function(){
        Route::get('/dashboard', [DashboardController::class, 'index']);

        Route::get('/doctors', [DoctorsController::class, 'index']);
        Route::post('/doctors', [DoctorsController::class, 'insert']);
        Route::post('/doctor-delete', [DoctorsController::class, 'delete']);
        Route::post('/doctor-update', [DoctorsController::class, 'update']);

        // Gejala
        Route::get('/gejala', [GejalaController::class, 'index']);
        Route::post('/gejala', [GejalaController::class, 'insert']);
        Route::post('/gejala-update', [GejalaController::class, 'update']);
        Route::post('/gejala-delete', [GejalaController::class, 'delete']);

        // Hama
        Route::get('/hama', [HamaController::class, 'index']);
        Route::post('/hama', [HamaController::class, 'insert']);
        Route::post('/hama-update', [HamaController::class, 'update']);
        Route::post('/hama-delete', [HamaController::class, 'delete']);

        // Gejala Hama
        Route::get('/gejalahama', [GejalaHamaContoller::class, 'index']);
        Route::post('/gejalahama', [GejalaHamaContoller::class, 'insert']);
        Route::post('/gejalahama-update', [GejalaHamaContoller::class, 'update']);
        Route::post('/gejalahama-delete', [GejalaHamaContoller::class, 'delete']);
        
        // Pengetahuan Hama
        Route::get('/pengetahuanhama', [PengetahuanHama::class, 'index']);
        Route::post('/pengetahuanhama', [PengetahuanHama::class, 'insert']);
        Route::post('/pengetahuanhama-update', [PengetahuanHama::class, 'update']);
        Route::post('/pengetahuanhama-delete', [PengetahuanHama::class, 'delete']);
        
        // Penyakit
        Route::get('/penyakit', [PenyakitController::class, 'index']);
        Route::post('/penyakit', [PenyakitController::class, 'insert']);
        Route::post('/penyakit-update', [PenyakitController::class, 'update']);
        Route::post('/penyakit-delete', [PenyakitController::class, 'delete']);

        // Pengetahuan
        Route::get('/pengetahuan', [PengetahuanController::class, 'index']);
        Route::post('/pengetahuan', [PengetahuanController::class, 'insert']);
        Route::post('/pengetahuan-update', [PengetahuanController::class, 'update']);
        Route::post('/pengetahuan-delete', [PengetahuanController::class, 'delete']);

        // Post
        Route::get('/post', [PostController::class, 'index']);
        Route::post('/post', [PostController::class, 'insert']);
        Route::post('/post-update', [PostController::class, 'update']);
        Route::post('/post-delete', [PostController::class, 'delete']);
        
        Route::get('/patients', [PatientsController::class, 'index']);
        Route::post('/patients', [PatientsController::class, 'insert']);
        Route::post('/patient-delete', [DoctorsController::class, 'delete']);
        Route::post('/patient-update', [DoctorsController::class, 'update']);

        Route::get('/settings', [SettingsController::class, 'index']);
        Route::get('/profile', [ProfileController::class, 'index']);  
    });

    Route::post('/logout', [LoginController::class, 'logout']);
});
