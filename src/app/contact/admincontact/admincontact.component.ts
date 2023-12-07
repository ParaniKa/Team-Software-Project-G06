import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContactService, ContactResponse } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrls: ['./admincontact.component.css']
})
export class AdmincontactComponent {

  constructor(private contactService: ContactService,private auth:AuthenticationService) {}


  user:any;
  contacts!: ContactResponse[];

  ngOnInit(): void {
    this.getContactLists();

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

  getContactLists(){
    this.contactService.getContacts().subscribe((res) =>{
      console.log(res);
      this.contacts = res.contacts
    });
  }


  deleteContact(event:any,eventId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        event.target.innertext = "Deleting....";

        this.contactService.destoryContact(eventId).subscribe((res:any) => {
           this.getContactLists();
           alert(res.message);
        });

      }
  }

}
