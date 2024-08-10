<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePromotionRequest;
use App\Models\Promotion;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PromotionController extends Controller
{
    public function index()
    {
        $list=Promotion::orderBy('created_at','DESC')
        ->get();
        
        return view("backend.promotion.index",compact('list'));
    }
    public function edit(string $id)
    {
        $promotion = Promotion::find($id);
        if($promotion ==  null)
        {
            return redirect()->route('admin.promotion.index');
        }
        $list=Promotion::orderBy('created_at','DESC')
        ->get();

        
        return view("backend.promotion.edit",compact('list','promotion'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $promotion = Promotion::find($id);
        if($promotion ==  null)
        {
            return redirect()->route('admin.promotion.index');
        }
        $promotion->promotion_name = $request->promotion_name;
        $promotion->discount_type = $request->discount_type;
        $promotion->discount_value = $request->discount_value;
        $promotion->start_date = $request->start_date;
        $promotion->end_date = $request->end_date;
        $promotion->created_at = date('Y-m-d H:i:s');
        $promotion->created_by = Auth::id() ?? 1;
        $promotion->save();
        return redirect()->route('admin.promotion.index');
    }
    public function store(StorePromotionRequest $request)
{

    // Tạo mới một bản ghi khuyến mãi
    $promotion = new Promotion();
    $promotion->promotion_name = $request->promotion_name;
    $promotion->discount_type = $request->discount_type;
    $promotion->discount_value = $request->discount_value;
    $promotion->start_date = $request->start_date;
    $promotion->end_date = $request->end_date;
    $promotion->created_at = date('Y-m-d H:i:s');
    $promotion->created_by = Auth::id() ?? 1; // Hoặc bạn có thể dùng Auth::user()->id
    $promotion->save();

    return redirect()->route('admin.promotion.index');
}

    public function show(string $id)
    {
        $promotion = Promotion::find($id);
        if($promotion ==  null)
        {
            return redirect()->route('admin.promotion.index');
        }

        return view("backend.promotion.show",compact('promotion'));
    }
    public function delete(string $id)
    {
        $promotion = Promotion::find($id);
            if ($promotion == null) {
                return redirect()->route('admin.promotion.index');
            }
        $promotion->status = 0;
        $promotion->updated_at = date('Y-m-d H:i:s');
        $promotion->updated_by = Auth::id() ?? 1;
        $promotion->save();
        return redirect()->route('admin.promotion.index');
    }
    public function trash()
    {
        $list=Promotion::orderBy('created_at','DESC')
        ->get();
        return view("backend.promotion.trash",compact('list'));
    }
    public function destroy (string $id)
    {
        $promotion = Promotion::find($id);
        if ($promotion == null) {
        return redirect()->route('admin.promotion.index');
        }
        $promotion->delete();
        return redirect()->route('admin.promotion.trash');
    }
    public function restore(string $id)
    {
        $promotion = Promotion::find($id);
        if ($promotion == null) {
            return redirect()->route('admin.promotion.index');
        }
    $promotion->status = 2;
    $promotion->updated_at = date('Y-m-d H:i:s');
    $promotion->updated_by = Auth::id() ?? 1;
    $promotion->save();
    return redirect()->route('admin.promotion.index');
    }
    public function create()
    {
        $list=Promotion::orderBy('created_at','DESC')
        ->get();
        return view("backend.promotion.create",compact('list'));
    }
}
