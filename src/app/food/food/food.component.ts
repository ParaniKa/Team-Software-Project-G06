import { Component } from '@angular/core';
import { FoodService, FoodResponse } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  constructor(private foodService: FoodService){}

  foods!: FoodResponse[];
  user:any;

  
  ngOnInit(){
    this.getFoodLists();
  }

//refreshing the data
  getFoodLists(){
    this.foodService.getFoods().subscribe((res) =>{
      console.log(res);
      this.foods = res.foods
    });
  }


  deleteFood(food:any,foodId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        food.target.innertext = "Deleting....";

        this.foodService.destoryFood(foodId).subscribe((res:any) => {
           this.getFoodLists();
           alert(res.message);
        });

      }
  }

}
