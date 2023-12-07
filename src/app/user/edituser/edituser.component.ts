import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

 userId!: any;
  users!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private userService: AuthService){

  }


  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.userService.getUser(this.userId).subscribe((res:any) => {
      console.log(res)
      this.users = res.users
  });
  }

  updateUser(){
    var inputData = {
      name:this.users.name,
      email:this.users.email,
      address:this.users.address,
      mobilenumber:this.users.mobilenumber
     
    }
    this.userService.updateUser(inputData,this.userId).subscribe({
      next:(res:any) => {
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
