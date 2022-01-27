<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gejala;
use Illuminate\Http\Request;


class GejalaController extends Controller
{
      public function index()
      {
      return inertia('Admin/Gejala', [
      'gejala' => Gejala::paginate(10),
      ]);
      }

      public function insert(Request $request)
      {
      $request->validate([
      'nama_gejala' => 'required'
      ]);

      Gejala::create([
      'nama_gejala' => $request->nama_gejala
      ]);

      return back();
      }

       public function update(Request $request)
       {
       $request->validate([
       'nama_gejala' => 'required'
       ]);

       Gejala::where('id', $request->id)->update([
       'nama_gejala' => $request->nama_gejala
       ]);

       return back();
       }

      public function delete(Request $request)
      {
      Gejala::where('id', $request->id)->delete();

      return back();
      }
}
