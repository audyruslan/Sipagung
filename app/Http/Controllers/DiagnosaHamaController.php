<?php

namespace App\Http\Controllers;

use App\Models\Coba;
use App\Models\GejalaHama;
use App\Models\HasilHama;
use App\Models\KondisiHama;
use Illuminate\Http\Request;

class DiagnosaHamaController extends Controller
{
     public function index()
      {
      return inertia('DiagnosaHama', [
      'kondisihama' => KondisiHama::paginate(10),
      'gejalahama' => GejalaHama::paginate(10)
      ]);
      }

      public function insert(Request $request)
      {
            $request->validate([
            'kondisihama' => 'required',
            ]);
            $data['kondisihama'] = implode(',', $request->kondisihama);

            Coba::create($data);

            return redirect('/hasildiagnosahama');
      }
}
