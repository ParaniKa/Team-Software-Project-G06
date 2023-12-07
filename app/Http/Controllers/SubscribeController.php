<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscribe;

class SubscribeController extends Controller
{
    //

    public function index()
    {
        $subscribes = Subscribe::all();
        return response()->json(['subscribes'=>$subscribes,200]);
    }

    //get by id
    public function show($id)
    {
        $subscribes = Subscribe::find($id);
        if(!empty($subscribes))
        {
            return response()->json(['subscribes'=>$subscribes,200]);
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
            'email' => 'required',
        ]);

        $subscribe = new Subscribe();
        $subscribe->email = $request->email;

        $subscribe->save();
        return response()->json([
            "message" => "Subscribed Successfully."
        ], 201);
    }

    public function delete($id)
    {
        $subscribe = Subscribe::find($id);
        if($subscribe) 
        {
            $subscribe->delete();
            return response()->json([ "message" => "Subscriber Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Subscriber not found."], 404);
        }
    }

}
