<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list=Post::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.post.index",compact('list'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("backend.post.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->detail = $request->detail;
        $post->type = $request->type;
        //$post->image = $request->image;
        $post->status = $request->status;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = Auth::id() ?? 1;
        $post->slug = Str::of($request->name)->slug('-');

        $post->save();
        return redirect()->route('admin.post.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $post_id)
    {
        $post = Post::where('post_id', $post_id)->first();
        if($post ==  null)
        {
            return redirect()->route('admin.post.index');
        }

        return view("backend.post.show",compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::find($id);
        if($post ==  null)
        {
            return redirect()->route('admin.post.index');
        }
        $list=Post::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();

        $htmlparentid='';
        $htmlsortorder='';
        foreach($list as $row)
        {
            if($post->parent_id == $row->id)
            {
                $htmlparentid.="<option selected value='".$row->id."'>".$row->name."</option>";
            }
            else
            {
                $htmlparentid.="<option value='".$row->id."'>".$row->name."</option>";
            }
            if($post->sort_order-1 == $row->sort_order)
            {
                $htmlsortorder.="<option selected value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
            else
            {
                $htmlsortorder.="<option value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
        }
        return view("backend.post.edit",compact('list','htmlparentid','htmlsortorder','post'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function status (string $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            return redirect()->route('admin.post.index');
        }
        $post->status = ($post->status == 1) ? 2: 1;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->save();
        return redirect()->route('admin.post.index');
    }
    public function delete(string $id)
    {
    $post = Post::find($id);
        if ($post == null) {
            return redirect()->route('admin.post.index');
        }
    $post->status = 0;
    $post->updated_at = date('Y-m-d H:i:s');
    $post->updated_by = Auth::id() ?? 1;
    $post->save();
    return redirect()->route('admin.post.index');
    }
    public function trash()
    {
        $list=Post::where('status','=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.post.trash",compact('list'));
    }
    public function restore(string $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            return redirect()->route('admin.post.index');
        }
    $post->status = 2;
    $post->updated_at = date('Y-m-d H:i:s');
    $post->updated_by = Auth::id() ?? 1;
    $post->save();
    return redirect()->route('admin.post.index');
    }
    public function destroy(string $id)
    {
        $post = Post::find($id);
        if ($post == null) {
        return redirect()->route('admin.post.index');
        }
        $post->delete();
        return redirect()->route('admin.post.trash');
    }
}
