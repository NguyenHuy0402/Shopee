<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    public function index()
    {
        $list=Contact::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.contact.index",compact('list'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contact = Contact::find($id);
        if($contact ==  null)
        {
            return redirect()->route('admin.contact.index');
        }

        return view("backend.contact.show",compact('contact'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $contact = Contact::find($id);
        if($contact ==  null)
        {
            return redirect()->route('admin.contact.index');
        }
        $list=Contact::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();

       
        return view("backend.contact.edit",compact('list','contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
            return redirect()->route('admin.transaction.index');
        }
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->message = $request->message;
        $contact->subject = $request->subject;
        $contact->status = $request->status;
        $contact->updated_at = now();
        $contact->updated_by = Auth::id() ?? 1;
        $contact->save();

        return redirect()->route('admin.contact.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function status (string $id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
            return redirect()->route('admin.contact.index');
        }
        $contact->status = ($contact->status == 1) ? 2: 1;
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->save();
        return redirect()->route('admin.contact.index');
    }
    public function delete(string $id)
    {
        $contact = Contact::find($id);
            if ($contact == null) {
                return redirect()->route('admin.contact.index');
            }
        $contact->status = 0;
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->updated_by = Auth::id() ?? 1;
        $contact->save();
        return redirect()->route('admin.contact.index');
    }
    public function trash()
    {
        $list=Contact::where('status','=',0)
        ->orderby('created_at','DESC')
        ->get();
        return view("backend.contact.trash",compact('list'));
    }
    public function destroy (string $id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
        return redirect()->route('admin.contact.index');
        }
        $contact->delete();
        return redirect()->route('admin.contact.trash');
    }
    public function restore(string $id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
            return redirect()->route('admin.contact.index');
        }
    $contact->status = 2;
    $contact->updated_at = date('Y-m-d H:i:s');
    $contact->updated_by = Auth::id() ?? 1;
    $contact->save();
    return redirect()->route('admin.contact.index');
    }
}
