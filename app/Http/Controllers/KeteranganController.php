<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class KeteranganController extends Controller
{
       public function index()
      {
      return inertia('Keterangan', [
      'post' => Post::paginate(10)
      ]);
    }
}
