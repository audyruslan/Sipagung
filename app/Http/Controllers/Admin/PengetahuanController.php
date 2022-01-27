<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gejala;
use App\Models\Pengetahuan;
use App\Models\Penyakit;
use Illuminate\Http\Request;

class PengetahuanController extends Controller
{
    public function index()
      {
            return inertia('Admin/Pengetahuan', [
            'pengetahuan' => Pengetahuan::paginate(10),
            'penyakit' => Penyakit::paginate(10),
            'gejala' => Gejala::paginate(10)
            ]);
      }

      public function insert(Request $request)
      {
            $request->validate([
            'id_penyakit' => 'required',
            'id_gejala' => 'required',
            'mb' => 'required',
            'md' => 'required'
            ]);

            Pengetahuan::create([
            'id_penyakit' => $request->id_penyakit,
            'id_gejala' => $request->id_gejala,
            'mb' => $request->mb,
            'md' => $request->md
            ]);

            return back();
      }

      public function update(Request $request)
      {
            $request->validate([
            'id_penyakit' => 'required',
            'id_gejala' => 'required',
            'mb' => 'required',
            'md' => 'required'
            ]);

            Pengetahuan::where('id', $request->id)->update([
            'id_penyakit' => $request->id_penyakit,
            'id_gejala' => $request->id_gejala,
            'mb' => $request->mb,
            'md' => $request->md
            ]);

            return back();
      }

      public function delete(Request $request)
      {
            Pengetahuan::where('id', $request->id)->delete();

            return back();
      }
}
