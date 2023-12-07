<?php

namespace App\Http\Controllers;

use App\Models\Auspicious;
use Illuminate\Http\Request;



class AuspiciousController extends Controller
{
    //get all
    public function index()
    {
        $auspiciouss = Auspicious::all();
        return response()->json(['auspiciouss'=>$auspiciouss,200]);
    }

    //get by id
    public function show($id)
    {
        $auspiciouss = Auspicious::find($id);
        if(!empty($auspiciouss))
        {
            return response()->json(['auspiciouss'=>$auspiciouss,200]);
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
            'auspicious_date' => 'required',
            'auspicious_day' =>'required',
            'auspicious_time_start' =>'required',
            'auspicious_time_end' =>'required',
        ]);

        $auspicious = new Auspicious();
        $auspicious->auspicious_date = $request->auspicious_date;
        $auspicious->auspicious_day = $request->auspicious_day;
        $auspicious->auspicious_time_start = $request->auspicious_time_start;
        $auspicious->auspicious_time_end = $request->auspicious_time_end;

        $auspicious->save();
        return response()->json([
            "message" => "Auspicious Time Added Successfully."
        ], 201);
    }

     //update
    public function update(Request $request, $id)
    {
            $request->validate([
                'auspicious_date' => 'required',
                'auspicious_day' =>'required',
                'auspicious_time_start' =>'required',
                'auspicious_time_end' =>'required',
            ]);

            $auspicious = Auspicious::find($id);
            if($auspicious)
            {
                $auspicious->auspicious_date = $request->auspicious_date;
                $auspicious->auspicious_day = $request->auspicious_day;
                $auspicious->auspicious_time_start = $request->auspicious_time_start;
                $auspicious->auspicious_time_end = $request->auspicious_time_end;
    
                $auspicious->update();

                return response()->json([ "message" => "Auspicious Time Updated Successfully."], 201); 
            }
            else
            {
                return response()->json(["message" => "Auspicious Time Not Found."], 404);
            }
    }
    //detele
    public function delete($id)
    {
        $auspicious = Auspicious::find($id);
        if($auspicious) 
        {
            $auspicious->delete();
            return response()->json([ "message" => "Auspicious Time Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Auspicious Time not found."], 404);
        }
    }
}
