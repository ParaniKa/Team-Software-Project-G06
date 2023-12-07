//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { AuthStateService  } from 'src/app/services/auth-state.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userid:any;

  constructor( private router:Router, 
    private token: TokenService,
    private authState: AuthStateService,
    private auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
  
    
    this.auth.login(email, password).subscribe((res:any)=>{
      this.userid = res;
      localStorage.setItem('user', JSON.stringify(res))

     // this.router.navigate(['userprofile']);
    //this.authState.setAuthState(true);
    if(this.userid.id == 1){
      this.router.navigate(['admindashboard']);
      }
    else{
      this.router.navigate(['userprofile']);
    }
    
    //local host message
    //alert(res.message);

    },
    err=>{
       console.log(err);
     },
  
    )


    // this.auth.login(email, password).subscribe(res => {
    //   this.data = res;
    //   //console.log(res);
    //   if(this.data.id === 1){
    //     this.token = this.data.data.token;
    //     localStorage.setItem('user', JSON.stringify(res))

}
 
}
