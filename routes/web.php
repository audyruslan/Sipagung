<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DoctorsController;
use App\Http\Controllers\Admin\GejalaController;
use App\Http\Controllers\Admin\GejalaHamaContoller;
use App\Http\Controllers\Admin\HamaController;
use App\Http\Controllers\Admin\KondisiController;
use App\Http\Controllers\Admin\KondisiHamaController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\PengetahuanController;
use App\Http\Controllers\Admin\PengetahuanHamaContoller;
use App\Http\Controllers\Admin\PenyakitController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\DiagnosaHamaController;
use App\Http\Controllers\DiagnosaPenyakitController;
use App\Http\Controllers\HasilDiagnosaHamaController;
use App\Http\Controllers\KeteranganController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RiwayatHamaController;
use App\Http\Controllers\RiwayatPenyakitController;
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

Route::get('/diagnosa', function () {
    return inertia('Diagnosa');
});

Route::get('/about', function () {
    return inertia('About');
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'checklogin']);

Route::get('/register', [LoginController::class, 'register']);
Route::post('/register', [LoginController::class, 'insert']);

// Diagnosa Hama
Route::get('/diagnosahama', [DiagnosaHamaController::class, 'index']);
Route::post('/diagnosahama', [DiagnosaHamaController::class, 'insert']);
Route::get('/hasildiagnosahama', [HasilDiagnosaHamaController::class, 'index']);
Route::get('/riwayathama', [RiwayatHamaController::class, 'index']);

// Diagnosa Penyakit
Route::get('/diagnosapenyakit', [DiagnosaPenyakitController::class, 'index']);
Route::get('/riwayatpenyakit', [RiwayatPenyakitController::class, 'index']);

Route::get('/keterangan', [KeteranganController::class, 'index']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function(){
        Route::get('/dashboard', [DashboardController::class, 'index']);

        // Admin
        Route::get('/admin', [AdminController::class, 'index']);
        Route::post('/admin', [AdminController::class, 'insert']);
        Route::post('/admin-update', [AdminController::class, 'update']);
        Route::post('/admin-delete', [AdminController::class, 'delete']);

        // Hama
        Route::get('/hama', [HamaController::class, 'index']);
        Route::post('/hama', [HamaController::class, 'insert']);
        Route::post('/hama-update', [HamaController::class, 'update']);
        Route::post('/hama-delete', [HamaController::class, 'delete']);

        // Kondisi Hama
        Route::get('/kondisihama', [KondisiHamaController::class, 'index']);
        Route::post('/kondisihama', [KondisiHamaController::class, 'insert']);
        Route::post('/kondisihama-update', [KondisiHamaController::class, 'update']);
        Route::post('/kondisihama-delete', [KondisiHamaController::class, 'delete']);

        // Gejala Hama
        Route::get('/gejalahama', [GejalaHamaContoller::class, 'index']);
        Route::post('/gejalahama', [GejalaHamaContoller::class, 'insert']);
        Route::post('/gejalahama-update', [GejalaHamaContoller::class, 'update']);
        Route::post('/gejalahama-delete', [GejalaHamaContoller::class, 'delete']);
        
        // Pengetahuan Hama
        Route::get('/pengetahuanhama', [PengetahuanHamaContoller::class, 'index']);
        Route::post('/pengetahuanhama', [PengetahuanHamaContoller::class, 'insert']);
        Route::post('/pengetahuanhama-update', [PengetahuanHamaContoller::class, 'update']);
        Route::post('/pengetahuanhama-delete', [PengetahuanHamaContoller::class, 'delete']);
        
        // Penyakit
        Route::get('/penyakit', [PenyakitController::class, 'index']);
        Route::post('/penyakit', [PenyakitController::class, 'insert']);
        Route::post('/penyakit-update', [PenyakitController::class, 'update']);
        Route::post('/penyakit-delete', [PenyakitController::class, 'delete']);

        // Kondisi Penyakit
        Route::get('/kondisi', [KondisiController::class, 'index']);
        Route::post('/kondisi', [KondisiController::class, 'insert']);
        Route::post('/kondisi-update', [KondisiController::class, 'update']);
        Route::post('/kondisi-delete', [KondisiController::class, 'delete']);

        // Gejala Penyakit
        Route::get('/gejala', [GejalaController::class, 'index']);
        Route::post('/gejala', [GejalaController::class, 'insert']);
        Route::post('/gejala-update', [GejalaController::class, 'update']);
        Route::post('/gejala-delete', [GejalaController::class, 'delete']);

        // Pengetahuan Penyakit
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
