import { Component } from '@angular/core';
import { PhotographyService } from 'src/app/services/photography.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editphotography',
  templateUrl: './editphotography.component.html',
  styleUrls: ['./editphotography.component.css']
})
export class EditphotographyComponent {
  photographyId!: any;
  photographys!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private photographyService:PhotographyService,private router:Router){

  }

  ngOnInit(){
    this.photographyId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.photographyService.getPhotography(this.photographyId).subscribe((res:any) => {
      console.log(res)
      this.photographys = res.photographys
  });
  }

  updatePhotography(){
    var inputData = {
      package:this.photographys.package,
      details:this.photographys.details,
      price:this.photographys.price
    }
    this.photographyService.updatePhotography(inputData,this.photographyId).subscribe({
      next:(res:any) => {
        this.router.navigate(['/photography/adminphotography']);
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
