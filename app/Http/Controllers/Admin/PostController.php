<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
      public function index()
      {
            return inertia('Admin/Post', [
            'post' => Post::paginate(10),
            ]);
      }

      public function insert(Request $request)
      {
            $request->validate([
            'nama_post' => 'required',
            'det_post' => 'required',
            'srn_post' => 'required',
            'gambar' => 'required'
            ]);

            Post::create([
            'nama_post' => $request->nama_post,
            'det_post' => $request->det_post,
            'srn_post' => $request->srn_post,
            'gambar' => $request->gambar
            ]);

            return back();
      }

      public function update(Request $request)
      {
            $request->validate([
            'nama_post' => 'required',
            'det_post' => 'required',
            'srn_post' => 'required',
            'gambar' => 'required'
            ]);

            Post::where('id', $request->id)->update([
            'nama_post' => $request->nama_post,
            'det_post' => $request->det_post,
            'srn_post' => $request->srn_post,
            'gambar' => $request->gambar
            ]);

            return back();
      }

      public function delete(Request $request)
      {
            Post::where('id', $request->id)->delete();

            return back();
      }
}
