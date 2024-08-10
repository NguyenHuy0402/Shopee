<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBrandRequest;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

use function Laravel\Prompts\select;

class BrandController extends Controller
{
    public function index()
    {
        $list=Brand::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.brand.index",compact('list'));
    }
    public function store(StoreBrandRequest $request)
    {
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->description = $request->description;
        $brand->slug = Str::of($request->name)->slug('-');
        $brand->sort_order = $request->sort_order;
        if ($request->image){
            $exten = $request->file("image")->extension();
            if(in_array($exten,["png","jpg","gif","webp"]))
            {
                $filename = $brand->slug . "." . $exten;
                $request->image->move(public_path("images/brands"),$filename);
                $brand->image = $filename;
            }
        }
        $brand->status = $request->status;
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = Auth::id() ?? 1;
        $brand->save();
        return redirect()->route('admin.brand.index');
    }
    public function show(string $id)
    {
        $brand = Brand::find($id);
        if($brand ==  null)
        {
            return redirect()->route('admin.brand.index');
        }

        return view("backend.brand.show",compact('brand'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $brand = Brand::find($id);
        if($brand ==  null)
        {
            return redirect()->route('admin.brand.index');
        }
        $list=Brand::where('status','!=',0)
        ->select("id","image","sort_order","name","slug","status")
        ->orderBy('created_at','DESC')
        ->get();

        $htmlparentid='';
        $htmlsortorder='';
        foreach($list as $row)
        {
            if($brand->parent_id == $row->id)
            {
                $htmlparentid.="<option selected value='".$row->id."'>".$row->name."</option>";
            }
            else
            {
                $htmlparentid.="<option value='".$row->id."'>".$row->name."</option>";
            }
            if($brand->sort_order-1 == $row->sort_order)
            {
                $htmlsortorder.="<option selected value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
            else
            {
                $htmlsortorder.="<option value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
        }
        return view("backend.brand.edit",compact('list','htmlparentid','htmlsortorder','brand'));
    }
    public function create()
    {
        $list=Brand::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.brand.create",compact('list'));
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $brand = Brand::find($id);
        if($brand ==  null)
        {
            return redirect()->route('admin.brand.index');
        }
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->description = $request->description;
        $brand->slug = Str::of($request->name)->slug('-');
        $brand->sort_order = $request->sort_order;
        if ($request->image){
            $exten = $request->file("image")->extension();
            if(in_array($exten,["png","jpg","gif","webp"]))
            {
                $filename = $brand->slug . "." . $exten;
                $request->image->move(public_path("images/brands"),$filename);
                $brand->image = $filename;
            }
        }
        $brand->status = $request->status;
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = Auth::id() ?? 1;
        $brand->save();
        return redirect()->route('admin.brand.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id)
    {
        $brand = Brand::find($id);
            if ($brand == null) {
                return redirect()->route('admin.brand.index');
            }
        $brand->status = 0;
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->updated_by = Auth::id() ?? 1;
        $brand->save();
        return redirect()->route('admin.brand.index');
    }
    public function trash()
    {
        $list=Brand::where('status','=',0)
        ->select("id","image","sort_order","name","slug","status")
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.brand.trash",compact('list'));
    }
    public function destroy (string $id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
        return redirect()->route('admin.brand.index');
        }
        $brand->delete();
        return redirect()->route('admin.brand.trash');
    }
    public function restore(string $id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            return redirect()->route('admin.brand.index');
        }
    $brand->status = 2;
    $brand->updated_at = date('Y-m-d H:i:s');
    $brand->updated_by = Auth::id() ?? 1;
    $brand->save();
    return redirect()->route('admin.brand.index');
    }
    public function status (string $id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            return redirect()->route('admin.brand.index');
        }
        $brand->status = ($brand->status == 1) ? 2: 1;
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->save();
        return redirect()->route('admin.brand.index');
    }
}

