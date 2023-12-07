import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent {

  eventId!: any;
  events!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private eventService: EventService){

  }

  ngOnInit(){
    this.eventId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.eventService.getEvent(this.eventId).subscribe((res:any) => {
      console.log(res)
      this.events = res.events
  });
  }

  updateEvent(){
    var inputData = {
      event_name:this.events.event_name,
      hall_description:this.events.hall_description,
      food_description:this.events.food_description
    }
    this.eventService.updateEvent(inputData,this.eventId).subscribe({
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



