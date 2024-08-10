<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    public function index()
    {
        $list=Transaction::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.transaction.index",compact('list'));
    }
    public function show(string $transaction_id)
    {
        $transaction = Transaction::where('transaction_id', $transaction_id)->first();
        if($transaction ==  null)
        {
            return redirect()->route('admin.transaction.index');
        }

        return view("backend.transaction.show",compact('transaction'));
    }
    public function update(Request $request, string $transaction_id)
    {
        $transaction = Transaction::where('transaction_id', $transaction_id)->first();
        if ($transaction == null) {
            return redirect()->route('admin.transaction.index');
        }
        $transaction->transaction_id = $request->transaction_id;
        $transaction->order_id = $request->order_id;
        $transaction->transaction_date = $request->transaction_date;
        $transaction->amount = $request->amount;

        if ($request->hasFile('image')) {
            $exten = $request->file('image')->extension();
            if (in_array($exten, ['png', 'jpg', 'jpeg', 'gif', 'webp'])) {
                $filename = Str::of($request->name)->slug('-') . '.' . $exten;
                $request->image->move(public_path('images/transactions'), $filename);
                $transaction->image = $filename;
            }
        }

        $transaction->status = $request->status;
        $transaction->updated_at = now();
        $transaction->updated_by = Auth::id() ?? 1;
        $transaction->save();

        return redirect()->route('admin.transaction.index');
    }
    public function trash()
    {
        $list = Transaction::where('status', '=', 0)
            ->orderBy('created_at', 'DESC')
            ->get();
    
        return view("backend.transaction.trash", compact('list'));
    }
    public function restore(string $id)
    {
        $transaction = Transaction::find($id);
        if ($transaction == null) {
            return redirect()->route('admin.transaction.index');
        }
    $transaction->status = 2;
    $transaction->updated_at = date('Y-m-d H:i:s');
    $transaction->updated_by = Auth::id() ?? 1;
    $transaction->save();
    return redirect()->route('admin.transaction.index');
    }
}
