import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createfood',
  templateUrl: './createfood.component.html',
  styleUrls: ['./createfood.component.css']
})
export class CreatefoodComponent {

  constructor(private foodService: FoodService, private router:Router){}

  package!: string
  welcome_drink!: string
  food_menu!: string
  condiments!: string
  desserts!: string
  price!: any
  errors: any = [];

  saveFood(){
    var inputData = {
      package:this.package,
      welcome_drink:this.welcome_drink,
      food_menu:this.food_menu,
      condiments:this.condiments,
      desserts:this.desserts,
      price:this.price
    }

    this.foodService.saveFood(inputData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/food/adminfood']);
        console.log(res, 'response');
        alert(res.message);
        this.package = '';
        this.welcome_drink = '';
        this.food_menu = '';
        this.condiments = '';
        this.desserts = '';
        this.price = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }

}
