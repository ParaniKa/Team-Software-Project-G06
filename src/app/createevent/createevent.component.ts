import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent {

  constructor(private eventService: EventService){}

  eventname!: string
  halldetails!: string
  fooddetails!: string

  errors: any = [];

  saveEvent(){
    var inputData = {
      event_name:this.eventname,
      hall_description:this.halldetails,
      food_description:this.fooddetails
    }

    this.eventService.saveEvent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.eventname = '';
        this.halldetails = '';
        this.fooddetails = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }
}
