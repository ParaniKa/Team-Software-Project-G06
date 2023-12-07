<?php

namespace App\Http\Controllers;
use App\Models\Auspiciou;
use Illuminate\Http\Request;

class AuspiciouController extends Controller
{
     //get all
     public function index()
     {
         $auspicious = Auspiciou::all();
         return response()->json(['auspicious'=>$auspicious,200]);
     }
 
     //get by id
     public function show($id)
     {
         $auspicious = Auspiciou::find($id);
         if(!empty($auspicious))
         {
             return response()->json(['auspicious'=>$auspicious,200]);
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
 
         $auspiciou = new Auspiciou;
         $auspiciou->auspicious_date = $request->auspicious_date;
         $auspiciou->auspicious_day = $request->auspicious_day;
         $auspiciou->auspicious_time_start = $request->auspicious_time_start;
         $auspiciou->auspicious_time_end = $request->auspicious_time_end;

         $auspiciou->save();
         return response()->json([
             "message" => "Event Added Successfully."
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
 
             $auspiciou = Auspiciou::find($id);
             if($auspiciou)
             {
                 $auspiciou->auspicious_date = $request->auspicious_date;
                 $auspiciou->auspicious_day = $request->auspicious_day;
                 $auspiciou->auspicious_time_start = $request->auspicious_time_start;
                 $auspiciou->auspicious_time_end = $request->auspicious_time_end;
     
                  $auspiciou->update();
 
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
         $auspiciou = Auspiciou::find($id);
         if($auspiciou) 
         {
            $auspiciou->delete();
             return response()->json([ "message" => "Event Deleted Successfully."], 200);
         } 
         else
         {
             return response()->json(["message" => "Event not found."], 404);
         }
     }

}
