<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Kondisi;
use Illuminate\Http\Request;

class KondisiController extends Controller
{
    public function index()
    {
        return inertia('Admin/Kondisi', [
            'kondisi' => Kondisi::paginate(10),
            ]);
        }

      public function insert(Request $request)
      {
            $request->validate([
                'kondisi' => 'required',
                'bobot' => 'required'
            ]);

            Kondisi::create([
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

       Kondisi::where('id', $request->id)->update([
       'kondisi' => $request->kondisi,
       'bobot' => $request->bobot
       ]);

       return back();
       }

      public function delete(Request $request)
      {
      Kondisi::where('id', $request->id)->delete();

      return back();
      }
}
