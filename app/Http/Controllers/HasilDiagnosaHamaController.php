<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HasilDiagnosaHamaController extends Controller
{
    public function index()
    {
        return inertia('HasilDiagnosaHama');
    }
}
