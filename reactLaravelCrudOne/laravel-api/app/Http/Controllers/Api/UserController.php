<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function store (Request $request){
       $user = New User;
       $user -> name = $request->input('name');
       $user -> email = $request->input('email');
       $user -> password = $request->input('password');
       $user->save();
       return response()->json([
        'status' => 200,
        'message' => 'Registerd successfully'
       ]);
    }
}
