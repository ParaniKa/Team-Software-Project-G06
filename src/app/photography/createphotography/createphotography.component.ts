import { Component } from '@angular/core';
import { PhotographyService } from 'src/app/services/photography.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-createphotography',
  templateUrl: './createphotography.component.html',
  styleUrls: ['./createphotography.component.css']
})
export class CreatephotographyComponent {
  constructor(private photographyService: PhotographyService, private router:Router){}

  package!: string
  details!: string
  price!: any
  errors: any = [];

  savePhotography(){
    var inputData = {
      package:this.package,
      details:this.details,
      price:this.price
    }

    this.photographyService.savePhotography(inputData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/photography/adminphotography']);
        console.log(res, 'response');
        alert(res.message);
        this.package = '';
        this.details = '';
        this.price = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }


}
