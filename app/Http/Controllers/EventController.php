<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMailable;
use Illuminate\Support\Facades\Log;


class EventController extends Controller
{
     //get all
    public function index()
    {
        $events = Event::all();
        return response()->json(['events'=>$events,200]);
    }

    //get by id
    public function show($id)
    {
        $events = Event::find($id);
        if(!empty($events))
        {
            return response()->json(['events'=>$events,200]);
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
            'event_name' => 'required',
            'hall_description' =>'required',
            'food_description' =>'required',
        ]);

        $event = new Event;
        $event->event_name = $request->event_name;
        $event->hall_description = $request->hall_description;
        $event->food_description = $request->food_description;

        $event->save();


        // Mail::send('Email.booking', ['booking' => $event], function ($m) {
        //     $m->to('kuddy175@gmail.com')->subject('Booking Form Mail!');
        //     $m->from('kuddy175@gmail.com');
        // });

        Mail::send('Email.booking', ['data1' => $event], function ($m) {
         
            $m->to('kuddy175@gmail.com')->subject('Booking Form Mail!');
      });

        return response()->json([
            "message" => "Event Added Successfully."
        ], 201);
    }

     //update
    public function update(Request $request, $id)
    {
            $request->validate([
                'event_name' => 'required',
                'hall_description' =>'required',
                'food_description' =>'required',
            ]);

            $event = Event::find($id);
            if($event)
            {
                $event->event_name = $request->event_name;
                $event->hall_description = $request->hall_description;
                $event->food_description = $request->food_description;
    
                 $event->update();

                return response()->json([ "message" => "Event Updated Successfully."], 201); 
            }
            else
            {
                return response()->json(["message" => "Event Not Found."], 404);
            }
    }
    //detele
    public function delete($id)
    {
        $event = Event::find($id);
        if($event) 
        {
           $event->delete();
            return response()->json([ "message" => "Event Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Event not found."], 404);
        }
    }

    public function mailSending(Request $request)
    {
        $contact_data = [
            'event_name' => $request->input('event_name'),
            'hall_description' => $request->input('hall_description'),
            'food_description' => $request->input('food_description'),
            //'subject' => $request->input('subject'),
            //'message' => $request->input('message'),
        ];
        Mail::to('kuddy175@gmail.com')->send(new ContactMailable($contact_data));
       // return redirect()->back()->with('status','Thank you for contact us. We will get back to asap.!');
       return response()->json([ "message" => "Event Updated Successfully."], 201); 
    }

    public function mail(){
        $data = array('event_name'=> "sfafdg" ,'hall_description' => "safgdg",'food_description' => "xzgg");
         Mail::send('Email.booking',  $data, function ($m) {
         
           $m->to('paranika517@gmail.com')->subject('Booking Form Mail!');
           $m->from('kuddy175@gmail.com');

        });
        echo "Basic Email Sent. Check your inbox";

       
    }


}
