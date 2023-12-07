<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    //
    public function index()
    {
        $feedbacks = Feedback::all();
        return response()->json(['feedbacks'=>$feedbacks,200]);
    }

    //get by id
    public function show($id)
    {
        $feedbacks = Feedback::find($id);
        if(!empty($feedbacks))
        {
            return response()->json(['feedbacks'=>$feedbacks,200]);
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
            'name' => 'required',
            'email' => 'required',
            'mobilenumber' =>'required',
            'message' => 'required',
            'posting_date' =>'required',
        ]);

        $feedback = new Feedback();
        $feedback->name = $request->name;
        $feedback->email = $request->email;
        $feedback->mobilenumber = $request->mobilenumber;
        $feedback->message = $request->message;
        $feedback->posting_date = $request->posting_date;

        $feedback->save();
        return response()->json([
            "message" => "Feedback Added Successfully."
        ], 201);
    }

    public function delete($id)
    {
        $feedback = Feedback::find($id);
        if($feedback) 
        {
            $feedback->delete();
            return response()->json([ "message" => "Feedback Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Feedback not found."], 404);
        }
    }
}
