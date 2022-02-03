<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KondisiHama;
use Illuminate\Http\Request;

class KondisiHamaController extends Controller
{
    public function index()
    {
        return inertia('Admin/KondisiHama', [
            'kondisihama' => KondisiHama::paginate(10),
            ]);
        }

      public function insert(Request $request)
      {
            $request->validate([
                'kondisi' => 'required',
                'bobot' => 'required'
            ]);

            KondisiHama::create([
                'kondisi' => $request->kondisi,
                'bobot' => $request->bobot
            ]);

            return back();
      }

       public function update(Request $request)
       {
       $request->validate([
       'kondisi' => 'required',
       'bobot' => 'required'
       ]);

       KondisiHama::where('id', $request->id)->update([
       'kondisi' => $request->kondisi,
       'bobot' => $request->bobot
       ]);

       return back();
       }

      public function delete(Request $request)
      {
      KondisiHama::where('id', $request->id)->delete();

      return back();
      }
}
