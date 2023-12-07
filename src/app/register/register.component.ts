//import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  errors = {
    name:null,
    email:null,
    address:null,
    mobilenumber:null,
    password:null,
  }
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const address = form.value.address;
    const mobilenumber = form.value.mobilenumber;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;

    this.auth.register(name,email,address,mobilenumber,password,password_confirmation).subscribe((res: any)=>{
      // console.log(res);
       // redirect to dashboard
       this.router.navigate(['/login']);

       //local host message
       alert(res.message);

       //to empty form(remove old details)
       form.value.name = '';
       form.value.email = '';
       form.value.address = '';
       form.value.mobilenumber = '';
       form.value.password = '';
       form.value.password_confirmation = '';
    },
    (err)=>{
      this.errors = err.error.errors;
      // console.log(err.error.errors);
    })
  }


}
