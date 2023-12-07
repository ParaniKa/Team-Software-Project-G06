import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent {
  foodId!: any;
  foods!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private foodService: FoodService,private router:Router){

  }

  ngOnInit(){
    this.foodId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.foodService.getFood(this.foodId).subscribe((res:any) => {
      console.log(res)
      this.foods = res.foods
  });
  }

  updateFood(){
    var inputData = {
      package:this.foods.package,
      welcome_drink:this.foods.welcome_drink,
      food_menu:this.foods.food_menu,
      condiments:this.foods.condiments,
      desserts:this.foods.desserts,
      price:this.foods.price
    }
    this.foodService.updateFood(inputData,this.foodId).subscribe({
      next:(res:any) => {
        this.router.navigate(['/food/adminfood']);
        console.log(res);
        alert(res.message);
      },
      error: (err: any) => {
        console.log(err);
        this.errors = err.error.errors;
      }
    });
  }
}
