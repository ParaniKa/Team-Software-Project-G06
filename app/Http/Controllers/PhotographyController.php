<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photography;


class PhotographyController extends Controller
{
    //
    //
    //get all
    public function index()
    {
        $photographyss = Photography::all();
        return response()->json(['photographys'=>$photographyss,200]);
    }

    //get by id
    public function show($id)
    {
        $photographyss = Photography::find($id);
        if(!empty($photographyss))
        {
            return response()->json(['photographys'=>$photographyss,200]);
        }
        else
        {
            return response()->json([
                "message" => "Event not found"
            ], 404);
        }
    }

    //create Event
    public function store(Request $request)
    {
        $request->validate([
            'package' => 'required',
            'details' =>'required',
            'price' =>'required',
        ]);

        $photographys = new Photography();
        $photographys->package = $request->package;
        $photographys->details = $request->details;
        $photographys->price = $request->price;

        $photographys->save();
        return response()->json([
            "message" => "Package Added Successfully."
        ], 201);
    }

     //update
    public function update(Request $request, $id)
    {
            $request->validate([
                'package' => 'required',
                'details' =>'required',
                'price' =>'required',
            ]);

            $photographys = Photography::find($id);
            if($photographys)
            {
                $photographys->package = $request->package;
                $photographys->details = $request->details;
                $photographys->price = $request->price;
    
                $photographys->update();

                return response()->json([ "message" => "Package Updated Successfully."], 201); 
            }
            else
            {
                return response()->json(["message" => "Package Not Found."], 404);
            }
    }
    //detele
    public function delete($id)
    {
        $photographys = Photography::find($id);
        if($photographys) 
        {
            $photographys->delete();
            return response()->json([ "message" => "Package Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Package not found."], 404);
        }
    }
}
