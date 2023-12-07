<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //get all
   public function index()
   {
       $users = User::all();
       return response()->json(['users'=>$users,200]);
   }

   //get by id
   public function show($id)
   {
       $users = User::find($id);
       if(!empty($users))
       {
           return response()->json(['users'=>$users,200]);
       }
       else
       {
           return response()->json([
               "message" => "User not found"
           ], 404);
       }
   }

   //create Event
   public function store(Request $request)
   {
       $request->validate([
           'name' => 'required',
           'email' =>'required',
           'address' =>'required',
           'mobilenumber' =>'required',
           'password' =>'required',
       ]);

       $user = new User;
       $user->name = $request->name;
       $user->email = $request->email;
       $user->address = $request->address;
       $user->mobilenumber = $request->mobilenumber;
       $user->password = $request->password;

       $user->save();
       return response()->json([
           "message" => "User Added Successfully."
       ], 201);
   }

    //update
   public function update(Request $request, $id)
   {
           $request->validate([
               'name' => 'required',
               'email' =>'required',
               'address' =>'required',
               'mobilenumber' =>'required',
               'password' =>'required',
           ]);

           $user = User::find($id);
           if($user)
           {
                $user->name = $request->name;
                $user->email = $request->email;
                $user->address = $request->address;
                $user->mobilenumber = $request->mobilenumber;
                $user->password = $request->password;
   
                $user->update();

               return response()->json([ "message" => "User Updated Successfully."], 201); 
           }
           else
           {
               return response()->json(["message" => "Users Not Found."], 404);
           }
   }
   //detele
   public function delete($id)
   {
    $user = User::find($id);
       if($user) 
       {
        $user->delete();
           return response()->json([ "message" => "Users Deleted Successfully."], 200);
       } 
       else
       {
           return response()->json(["message" => "Users not found."], 404);
       }
   }

}

