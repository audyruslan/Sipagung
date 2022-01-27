<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Hama;
use Illuminate\Http\Request;

class HamaController extends Controller
{
    public function index()
      {
            return inertia('Admin/Hama', [
            'hama' => Hama::paginate(10),
            ]);
      }

      public function insert(Request $request)
      {
            $request->validate([
            'nama_hama' => 'required',
            'det_hama' => 'required',
            'srn_hama' => 'required',
            'gambar' => 'required'
            ]);

            Hama::create([
            'nama_hama' => $request->nama_hama,
            'det_hama' => $request->det_hama,
            'srn_hama' => $request->srn_hama,
            'gambar' => $request->gambar
            ]);

            return back();
      }

      public function update(Request $request)
      {
            $request->validate([
            'nama_hama' => 'required',
            'det_hama' => 'required',
            'srn_hama' => 'required',
            'gambar' => 'required'
            ]);

            Hama::where('id', $request->id)->update([
            'nama_hama' => $request->nama_hama,
            'det_hama' => $request->det_hama,
            'srn_hama' => $request->srn_hama,
            'gambar' => $request->gambar
            ]);

            return back();
      }

      public function delete(Request $request)
      {
            Hama::where('id', $request->id)->delete();

            return back();
      }
}
