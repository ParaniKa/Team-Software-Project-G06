import { Component } from '@angular/core';
import { FoodService, FoodResponse } from 'src/app/services/food.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-adminfood',
  templateUrl: './adminfood.component.html',
  styleUrls: ['./adminfood.component.css']
})
export class AdminfoodComponent {

  constructor(private foodService: FoodService, private auth:AuthenticationService){}

  foods!: FoodResponse[];
  user:any;

  
  ngOnInit(){
    this.getFoodLists();
    // Check status
    this.auth.status().subscribe((res)=>{
      console.log(res);
    })
    this.auth.user().subscribe((res)=>{
      this.user = res;
    }, (err) =>{
      console.log(err);
    })
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
