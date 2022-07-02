<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductController extends Controller
{
    public function index(Request $request){
        $product = Product::all();

        return response()->json([
           'status'=>200,
           'products'=>$product,
        ]);
   }
    public function store(Request $request){
         $product = New Product;
         $product->name = $request->input('name');
         $product->price = $request->input('price');
         $product->save();

         return response()->json([
            'status'=>200,
            'msg'=>'Success',
         ]);
    }
    
}
