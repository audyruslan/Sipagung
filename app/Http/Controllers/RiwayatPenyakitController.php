<?php

namespace App\Http\Controllers;

use App\Models\Hasil;
use Illuminate\Http\Request;

class RiwayatPenyakitController extends Controller
{
    public function index()
      {
      return inertia('RiwayatPenyakit', [
      'hasilpenyakit' => Hasil::paginate(10)
      ]);
    }
}
