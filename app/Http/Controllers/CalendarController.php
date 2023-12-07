<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calendar;

class CalendarController extends Controller
{
    //

    //public function index()
    // {
    //     $events = array();
    //     $bookings = Booking::all();
    //     foreach($bookings as $booking){
    //         $events[] =[
    //             'title' => $booking->status,
    //             'date' => $booking->event_date,
    //         ];

    //     }
        
    //     return response()->json(['events'=>$events,200]);
    // }

    public function index()
    {
        $calendars = Calendar::all();
        return response()->json(['calendars'=>$calendars,200]);
    }
    //get by id
    public function show($id)
    {
        $calendars = Calendar::find($id);
        if(!empty($calendars))
        {
            return response()->json(['calendars'=>$calendars,200]);
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
            'event_date' => 'required',
            'color' =>'required',
        ]);

        $calendar = new Calendar();
        $calendar->event_name = $request->event_name;
        $calendar->event_date = $request->event_date;
        $calendar->color = $request->color;

        $calendar->save();
        return response()->json([
            "message" => "Date Added Successfully."
        ], 201);
    }

     //update
    public function update(Request $request, $id)
    {
            $request->validate([
                'event_name' => 'required',
                'event_date' => 'required',
                'color' =>'required',
            ]);

            $calendar = Calendar::find($id);
            if($calendar)
            {
                $calendar->event_name = $request->event_name;
                $calendar->event_date = $request->event_date;
                $calendar->color = $request->color;
    
                $calendar->update();

                return response()->json([ "message" => "Date Updated Successfully."], 201); 
            }
            else
            {
                return response()->json(["message" => "Date Not Found."], 404);
            }
    }
    //detele
    public function delete($id)
    {
        $calendar = Calendar::find($id);
        if($calendar) 
        {
            $calendar->delete();
            return response()->json([ "message" => "Date Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Date not found."], 404);
        }
    }


}

