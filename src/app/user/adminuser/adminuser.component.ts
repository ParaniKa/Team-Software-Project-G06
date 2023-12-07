import { Component } from '@angular/core';
import { AuthService,UserResponse } from 'src/app/services/auth.service';
//import { AuthService,UserResponse } from '../services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

//import { AuthService, UserResponse } from '../services/auth.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent {

  constructor(private userService: AuthService , private auth:AuthenticationService){}

  users!: UserResponse[];
  user:any;

  ngOnInit(){
    this.getUserLists();
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
  getUserLists(){
    this.userService.getUsers().subscribe((res) =>{
      console.log(res);
      this.users = res.users
    });
  }


  deleteUser(user:any,userId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        user.target.innertext = "Deleting....";

        this.userService.destoryUser(userId).subscribe((res:any) => {
           this.getUserLists();
           alert(res.message);
        });

      }
  }
}
