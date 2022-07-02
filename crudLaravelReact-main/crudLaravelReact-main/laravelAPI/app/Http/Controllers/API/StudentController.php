<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
        
        $students = Student::all();

        return response()->json([
            'status' => 201,
            'students' => $students,
        ]);
    }
    public function store(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'department' => 'required',
                'email' => 'required',
                'phone' => 'required',
            ]);
    
            if ($validator->fails()){
                return response()->json([
                    'validate_error' => $validator->errors(),
                ]);
            }else {
            $student = new Student;
            $student->name = $request->input('name');
            $student->department = $request->input('department');
            $student->email = $request->input('email');
            $student->phone = $request->input('phone');
            $student->save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Student added successfully'
            ]);
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function edit($id){
        
        $students = Student::find($id);

        return response()->json([
            'status' => 200,
            'student' => $students,
        ]);
    }
    public function update(Request $request, $id){
        $student = Student::find($id);
        $student->name = $request->input('name');
        $student->department = $request->input('department');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->save();

        return response()->json([
            'status' => 200,
            'message' => 'Updated successfully'
        ]);
    }
    public function destroy($id){
        $students = Student::find($id);
        $students->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Delete successfully',
        ]);
    }
}
