<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
Use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request){
      


   
        $user = New User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json([
           'status'=>200,
           'msg'=>'Success',
        ]);
   }

   public function login(Request $request){
       
      if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
         $token = now();
         return response()->json([
            'status'=>200,
            'msg'=>'Success',
            'token' =>$token
         ]);
     }
   }
   public function logout(Request $request)
      {
         Auth::logout();
      
         return response()->json([
            'token' =>null
         ]);
      }
}
