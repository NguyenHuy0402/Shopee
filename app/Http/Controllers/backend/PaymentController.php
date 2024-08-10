<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePaymentRequest;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function index()
    {
        $list=Payment::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.payment.index",compact('list'));
    }

    public function store(StorePaymentRequest $request)
    {
        $payment = new Payment();
        $payment->name = $request->name;
        $payment->description = $request->description;
        $payment->slug = Str::of($request->name)->slug('-');
        $payment->sort_order = $request->sort_order;
        if ($request->image){
            $exten = $request->file("image")->extension();
            if(in_array($exten,["png","jpg","gif","webp"]))
            {
                $filename = $payment->slug . "." . $exten;
                $request->image->move(public_path("images/payments"),$filename);
                $payment->image = $filename;
            }
        }
        $payment->status = $request->status;
        $payment->created_at = date('Y-m-d H:i:s');
        $payment->created_by = Auth::id() ?? 1;
        $payment->save();
        return redirect()->route('admin.payment.index');
    }
    public function show(string $id)
    {
        $payment = Payment::find($id);
        if($payment ==  null)
        {
            return redirect()->route('admin.payment.index');
        }

        return view("backend.payment.show",compact('payment'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $payment = Payment::find($id);
        if($payment ==  null)
        {
            return redirect()->route('admin.payment.index');
        }
        $list=Payment::where('status','!=',0)
        ->select("id","status")
        ->orderBy('created_at','DESC')
        ->get();

        $htmlparentid='';
        $htmlsortorder='';
        foreach($list as $row)
        {
            if($payment->parent_id == $row->id)
            {
                $htmlparentid.="<option selected value='".$row->id."'>".$row->name."</option>";
            }
            else
            {
                $htmlparentid.="<option value='".$row->id."'>".$row->name."</option>";
            }
            if($payment->sort_order-1 == $row->sort_order)
            {
                $htmlsortorder.="<option selected value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
            else
            {
                $htmlsortorder.="<option value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
        }
        return view("backend.payment.edit",compact('list','htmlparentid','htmlsortorder','payment'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $payment = Payment::find($id);
        if($payment ==  null)
        {
            return redirect()->route('admin.payment.index');
        }
        $payment = new Payment();
        $payment->name = $request->name;
        $payment->description = $request->description;
        $payment->slug = Str::of($request->name)->slug('-');
        $payment->sort_order = $request->sort_order;
        if ($request->image){
            $exten = $request->file("image")->extension();
            if(in_array($exten,["png","jpg","gif","webp"]))
            {
                $filename = $payment->slug . "." . $exten;
                $request->image->move(public_path("images/payments"),$filename);
                $payment->image = $filename;
            }
        }
        $payment->status = $request->status;
        $payment->created_at = date('Y-m-d H:i:s');
        $payment->created_by = Auth::id() ?? 1;
        $payment->save();
        return redirect()->route('admin.payment.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id)
    {
        $payment = Payment::find($id);
            if ($payment == null) {
                return redirect()->route('admin.payment.index');
            }
        $payment->status = 0;
        $payment->updated_at = date('Y-m-d H:i:s');
        $payment->updated_by = Auth::id() ?? 1;
        $payment->save();
        return redirect()->route('admin.payment.index');
    }
    public function trash()
    {
        $list= Payment::where('status','=',0)
        ->select("id","image","sort_order","name","slug","status")
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.payment.trash",compact('list'));
    }
    public function destroy (string $id)
    {
        $payment = Payment::find($id);
        if ($payment == null) {
        return redirect()->route('admin.payment.index');
        }
        $payment->delete();
        return redirect()->route('admin.payment.trash');
    }
    public function restore(string $id)
    {
        $payment = Payment::find($id);
        if ($payment == null) {
            return redirect()->route('admin.payment.index');
        }
    $payment->status = 2;
    $payment->updated_at = date('Y-m-d H:i:s');
    $payment->updated_by = Auth::id() ?? 1;
    $payment->save();
    return redirect()->route('admin.payment.index');
    }
    public function status (string $id)
    {
        $payment = Payment::find($id);
        if ($payment == null) {
            return redirect()->route('admin.payment.index');
        }
        $payment->status = ($payment->status == 1) ? 2: 1;
        $payment->updated_at = date('Y-m-d H:i:s');
        $payment->save();
        return redirect()->route('admin.payment.index');
    }
}
