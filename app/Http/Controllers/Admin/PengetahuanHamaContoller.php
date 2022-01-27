<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GejalaHama;
use App\Models\Hama;
use App\Models\PengetahuanHama;
use Illuminate\Http\Request;

class PengetahuanHamaContoller extends Controller
{
    public function index()
      {
            return inertia('Admin/PengetahuanHama', [
            'pengetahuanhama' => PengetahuanHama::all(),
            'hama' => Hama::paginate(10),
            'gejalahama' => GejalaHama::paginate(10)
            ]);
      }

      public function insert(Request $request)
      {
            $request->validate([
            'id_hama' => 'required',
            'id_gejala' => 'required',
            'mb' => 'required',
            'md' => 'required'
            ]);

            PengetahuanHama::create([
            'id_hama' => $request->id_hama,
            'id_gejala' => $request->id_gejala,
            'mb' => $request->mb,
            'md' => $request->md
            ]);

            return back();
      }

      public function update(Request $request)
      {
            $request->validate([
            'id_hama' => 'required',
            'id_gejala' => 'required',
            'mb' => 'required',
            'md' => 'required'
            ]);

            PengetahuanHama::where('id', $request->id)->update([
            'id_hama' => $request->id_hama,
            'id_gejala' => $request->id_gejala,
            'mb' => $request->mb,
            'md' => $request->md
            ]);

            return back();
      }

      public function delete(Request $request)
      {
            PengetahuanHama::where('id', $request->id)->delete();

            return back();
      }
}
