<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $list=User::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.user.index",compact('list'));
    }
}
