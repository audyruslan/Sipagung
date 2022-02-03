<?php

namespace App\Http\Controllers;

use App\Models\HasilHama;
use Illuminate\Http\Request;

class RiwayatHamaController extends Controller
{
    public function index()
      {
      return inertia('RiwayatHama', [
      'hasilhama' => HasilHama::paginate(10)
      ]);
    }
}
