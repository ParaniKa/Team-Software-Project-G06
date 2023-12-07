<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    //
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['contacts'=>$contacts,200]);
    }

    //get by id
    public function show($id)
    {
        $contacts = Contact::find($id);
        if(!empty($contacts))
        {
            return response()->json(['contacts'=>$contacts,200]);
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
        ]);

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->mobilenumber = $request->mobilenumber;
        $contact->message = $request->message;
       

        $contact->save();
        return response()->json([
            "message" => "Contact us query Added Successfully."
        ], 201);
    }

    public function delete($id)
    {
        $contact = Contact::find($id);
        if($contact) 
        {
            $contact->delete();
            return response()->json([ "message" => "Contact us query Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Contact us query not found."], 404);
        }
    }
}
