import { Component } from '@angular/core';
//import { EventService, EventResponse } from '../services/event.service';
import { EventService, EventResponse } from 'src/app/services/event.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  constructor(private eventService: EventService, private auth:AuthenticationService){}

  events!: EventResponse[];
  user:any;

  
  ngOnInit(){
    this.getEventLists();
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
  getEventLists(){
    this.eventService.getEvents().subscribe((res) =>{
      console.log(res);
      this.events = res.events
    });
  }


  deleteEvent(event:any,eventId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        event.target.innertext = "Deleting....";

        this.eventService.destoryEvent(eventId).subscribe((res:any) => {
           this.getEventLists();
           alert(res.message);
        });

      }
  }
}
