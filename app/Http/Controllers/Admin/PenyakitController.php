<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Penyakit;

class PenyakitController extends Controller 
{ 
      public function index()
      {
            return inertia('Admin/Penyakit', [
            'penyakit' => Penyakit::paginate(10),
            ]);
      }

      public function insert(Request $request)
      {
            $request->validate([
            'nama_penyakit' => 'required',
            'det_penyakit' => 'required',
            'srn_penyakit' => 'required',
            'gambar' => 'required'
            ]);

            Penyakit::create([
            'nama_penyakit' => $request->nama_penyakit,
            'det_penyakit' => $request->det_penyakit,
            'srn_penyakit' => $request->srn_penyakit,
            'gambar' => $request->gambar
            ]);

            return back();
      }

      public function update(Request $request)
      {
            $request->validate([
            'nama_penyakit' => 'required',
            'det_penyakit' => 'required',
            'srn_penyakit' => 'required',
            'gambar' => 'required'
            ]);

            Penyakit::where('id', $request->id)->update([
            'nama_penyakit' => $request->nama_penyakit,
            'det_penyakit' => $request->det_penyakit,
            'srn_penyakit' => $request->srn_penyakit,
            'gambar' => $request->gambar
            ]);

            return back();
      }

      public function delete(Request $request)
      {
            Penyakit::where('id', $request->id)->delete();

            return back();
      }
}
