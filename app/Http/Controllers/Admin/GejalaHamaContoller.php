<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GejalaHama;
use Illuminate\Http\Request;

class GejalaHamaContoller extends Controller
{
         public function index()
      {
      return inertia('Admin/GejalaHama', [
      'gejalahama' => GejalaHama::paginate(10),
      ]);
      }

      public function insert(Request $request)
      {
      $request->validate([
      'nama_gejala' => 'required'
      ]);

      GejalaHama::create([
      'nama_gejala' => $request->nama_gejala
      ]);

      return back();
      }

       public function update(Request $request)
       {
       $request->validate([
       'nama_gejala' => 'required'
       ]);

       GejalaHama::where('id', $request->id)->update([
       'nama_gejala' => $request->nama_gejala
       ]);

       return back();
       }

      public function delete(Request $request)
      {
      GejalaHama::where('id', $request->id)->delete();

      return back();
      }
}
