<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Food;

class FoodController extends Controller
{
    //
    //get all
    public function index()
    {
        $foods = Food::all();
        return response()->json(['foods'=>$foods,200]);
    }

    //get by id
    public function show($id)
    {
        $foods = Food::find($id);
        if(!empty($foods))
        {
            return response()->json(['foods'=>$foods,200]);
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
            'welcome_drink' => 'required',
            'food_menu' =>'required',
            'condiments' => 'required',
            'desserts' =>'required',
            'price' =>'required',
        ]);

        $food = new Food();
        $food->package = $request->package;
        $food->welcome_drink = $request->welcome_drink;
        $food->food_menu = $request->food_menu;
        $food->condiments = $request->condiments;
        $food->desserts = $request->desserts;
        $food->price = $request->price;

        $food->save();
        return response()->json([
            "message" => "Food Package Added Successfully."
        ], 201);
    }

     //update
    public function update(Request $request, $id)
    {
            $request->validate([
            'package' => 'required',
            'welcome_drink' => 'required',
            'food_menu' =>'required',
            'condiments' => 'required',
            'desserts' =>'required',
            'price' =>'required',
            ]);

            $food = Food::find($id);
            if($food)
            {
                $food->package = $request->package;
                $food->welcome_drink = $request->welcome_drink;
                $food->food_menu = $request->food_menu;
                $food->condiments = $request->condiments;
                $food->desserts = $request->desserts;
                $food->price = $request->price;
    
                $food->update();

                return response()->json([ "message" => "Food Package Updated Successfully."], 201); 
            }
            else
            {
                return response()->json(["message" => "Food Package Not Found."], 404);
            }
    }
    //detele
    public function delete($id)
    {
        $food = Food::find($id);
        if($food) 
        {
            $food->delete();
            return response()->json([ "message" => "Food Package Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Food Package not found."], 404);
        }
    }

}
