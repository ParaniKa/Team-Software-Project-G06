<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;




class BookingController extends Controller
{
    //
     //get all
     public function index()
     {
         $bookings = Booking::all();
         return response()->json(['bookings'=>$bookings,200]);
     }
 
     //get by id
     public function show($id)
     {
         $bookings = Booking::find($id);
         if(!empty($bookings))
         {
             return response()->json(['bookings'=>$bookings,200]);
         }
         else
         {
             return response()->json([
                 "message" => "Booking not found"
             ], 404);
         }
     }
 
     //create Event
     public function store(Request $request)
     {

        // $file =$request->file("file");
        // $uploadPath = "images/profile";
        // $originalName = $file->getClientOriginalName();
        // $file->move($uploadPath,$originalName);

        

         $request->validate([
             'customer_name' => 'required',
             'customer_email' =>'required',
             'event_name' =>'required',
             'event_date' =>'required',
             'event_start_time' =>'required',
             'event_end_time' =>'required',
             'payment_date' =>'required',
             'payment_total' =>'required',
             'payment_method'=> 'required',

            //'file'=> 'required',

             'total_guests' =>'required',
             'food' =>'required',
             'food_price' =>'required',
             'photography' =>'required',
             'photography_price' =>'required',
             'booking_status' =>'required',

         ]);
 
         $booking = new Booking;
         $booking->customer_name = $request->customer_name;
         $booking->customer_email = $request->customer_email;
         $booking->event_name = $request->event_name;
         $booking->event_date = $request->event_date;
         $booking->event_start_time = $request->event_start_time;
         $booking->event_end_time = $request->event_end_time;
         $booking->payment_date = $request->payment_date;
         $booking->payment_total = $request->payment_total;
         $booking->payment_method = $request->payment_method;

         //$booking->file = $originalName;

         $booking->total_guests = $request->total_guests;
         $booking->food = $request->food;
         $booking->food_price = $request->food_price;
         $booking->photography = $request->photography;
         $booking->photography_price = $request->photography_price;

         $booking->booking_status = $request->booking_status; 

         $booking->save();


        // $data = $request->customer_name;
         //  $data = array('name'=> $request->customer_name ,'email' => $request->customer_email);
        //  Mail::send('Email.booking',  function ($m) {
         
        //     $m->to('kanishdan23@gmail.com')->subject('Booking Form Mail!');
        //     $m->from('kanishdan23@gmail.com');

        // });

    //         Mail::send( function ($m) {
         
    //          $m->to('kanishdan23@gmail.com')->subject('Booking Form Mail!');
    //    });


    // Mail::send('Email.booking', ['booking' => $booking], function ($m) {
    //     $m->to('kanishdan23@gmail.com')->subject('Booking Form Mail!');
    //     $m->from('kanishdan23@gmail.com');
    // });

          return response()->json([
              "message" => "Booking Added Successfully."
         ], 201);

    


     }
 
      //update
     public function update(Request $request, $id)
     {
             $request->validate([
                 'customer_name' => 'required',
                 'customer_email' =>'required',
                 'event_name' =>'required',
                 'event_date' => 'required',
                 'event_start_time' =>'required',
                 'event_end_time' =>'required',
                 'payment_date' =>'required',
                 'payment_total' =>'required',
                 'payment_method'=> 'required',


                 'total_guests' =>'required',
                 'food' =>'required',
                 'food_price' =>'required',
                 'photography' =>'required',
                 'photography_price' =>'required',

                 'booking_status' =>'required',
                  
                 
             ]);
 
             $booking = Booking::find($id);
             if($booking)
             {
                 $booking->customer_name = $request->customer_name;
                 $booking->customer_email = $request->customer_email;
                 $booking->event_name = $request->event_name;
                 $booking->event_date = $request->event_date;
                 $booking->event_start_time = $request->event_start_time;
                 $booking->event_end_time = $request->event_end_time;
                 $booking->payment_date = $request->payment_date;
                 $booking->payment_total = $request->payment_total;
                 $booking->payment_method = $request->payment_method;

                 $booking->total_guests = $request->total_guests;
                 $booking->food = $request->food;
                 $booking->food_price = $request->food_price;
                 $booking->photography = $request->photography;
                 $booking->photography_price = $request->photography_price;

                 $booking->booking_status = $request->booking_status;
     
                 $booking->update();
 
                 return response()->json([ "message" => "Booking Updated Successfully."], 201); 
             }
             else
             {
                 return response()->json(["message" => "Booking Not Found."], 404);
             }
     }
     //detele
     public function delete($id)
     {
         $booking = Booking::find($id);
         if($booking) 
         {
            $booking->delete();
             return response()->json([ "message" => "Booking Deleted Successfully."], 200);
         } 
         else
         {
             return response()->json(["message" => "Booking not found."], 404);
         }
     }
 
     public function imageUpload(Request $request)
     {
        //dd($request->all());

        if ($request->has('file')){
            $file = $request->file;

            ///$booking_id=$request->id;
            ///$booking =Booking::find($booking_id);

           
            $name = time().'-'.$file->getClientOriginalExtension();
            $path = public_path('images');
            $file->move($path,$name);

            //$booking = new Booking;
            //$booking->file =  $name;
            //$booking->save();

           //return response()->json(['data' => '','message' => 'Image upload successfully.','status' => true],200);
           return response()->json([ "message" => "Image upload successfully."], 200);

            }
     }
    
     //public function fileUpload(Request $request ){
    //     if($request-> hasFile('image')){
    //         $fileName=$request->file('image')->getClientOriginalName();
    //         $product_id=$request->id;
    //         $product =Booking::find($product_id);

    //         $handle = fopen($request->file('image'), "rb");
    //         $contents = fread($handle, filesize($request->file('image')));
    //         $product->image = $contents;
            
    //         $product->save();
    //         fclose($handle);
    //     }




//     $uploaded_files = $request->file->store('public/image');
//     $booking = new Booking;
//     $booking->file = $request->file->hashName();
//     $results = $booking->save();
//      if($results){
//         return ["result" => "image added"];
//      }
//         else{
//             return ["result" => "image not  added"];
//         }
     

//     }
}
