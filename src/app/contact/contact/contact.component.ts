import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private contactService: ContactService){}

  name!: string
  email!: string
  message!: string
  mobilenumber!:any

  errors: any = [];

  saveContact(){
    var inputData = {
      name:this.name,
      email:this.email,
      mobilenumber:this.mobilenumber,
      message:this.message,
    }

    this.contactService.saveContact(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.name = '';
        this.email = '';
        this.mobilenumber = '';
        this.message = '';
        

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }


}
