import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FoodResponse {
  id: number
  package: string
  welcome_drink: string
  food_menu: string
  condiments: string
  desserts: string
  price: any
  created_at: string
  updated_at:string
}

export interface FoodResponseType{
  status: Number,
  foods: FoodResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  //add events form
  saveFood(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/food/store',inputData);
  }

  //show all data in table
  getFoods(){
    return this.httpClient.get<FoodResponseType>('http://127.0.0.1:8000/api/food/index');
  }

  //get the data for particular id to edit form
  getFood(foodId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/food/show/'+foodId);
  }

  //to update button
  updateFood(inputData: object, foodId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/food/update/'+foodId,inputData);

  }
  destoryFood(foodId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/food/delete/'+foodId);
  }
}
