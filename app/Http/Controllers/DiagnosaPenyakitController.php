<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use App\Models\Kondisi;
use Illuminate\Http\Request;

class DiagnosaPenyakitController extends Controller
{
    public function index()
      {
      return inertia('DiagnosaPenyakit', [
      'kondisipenyakit' => Kondisi::paginate(10),
      'gejalapenyakit' => Gejala::paginate(10)
      ]);
      }
}
