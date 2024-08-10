<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShippingController extends Controller
{
    public function index()
    {
        $list=Shipping::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.shipping.index",compact('list'));
    }
    public function show(string $shopping_id)
    {
        $shipping = Shipping::where('shopping_id', $shopping_id)->first();
        if($shipping ==  null)
        {
            return redirect()->route('admin.shipping.index');
        }

        return view("backend.shipping.show",compact('shipping'));
    }
    public function edit(string $id)
    {
        $shipping = Shipping::find($id);
        if($shipping ==  null)
        {
            return redirect()->route('admin.shipping.index');
        }
        $list=Shipping::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();

       
        return view("backend.shipping.edit",compact('list','shipping'));
    }
    public function update(Request $request, string $id)
    {
        $shipping = Shipping::find($id);
        if ($shipping == null) {
            return redirect()->route('admin.transaction.index');
        }
        $shipping->shipping_id = $request->shipping_id;
        $shipping->order_id = $request->order_id;
        $shipping->shipping_method = $request->shipping_method;
        $shipping->cost = $request->cost;
        $shipping->updated_at = now();
        $shipping->updated_by = Auth::id() ?? 1;
        $shipping->save();

        return redirect()->route('admin.shipping.index');
    }
    public function create()
    {
        $list=Shipping::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view('backend.shipping.create',compact('list'));
    }
}
