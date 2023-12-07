import { Component } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcalendar',
  templateUrl: './createcalendar.component.html',
  styleUrls: ['./createcalendar.component.css']
})
export class CreatecalendarComponent {
  constructor(private calendarService: CalendarService, private router:Router){}

  event_name!: string
  event_date!: any
  color!: string
  errors: any = [];

  saveCalendar(){
    var inputData = {
      event_name:this.event_name,
      event_date:this.event_date,
      color:this.color,
    }

    this.calendarService.saveCalendar(inputData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/calendar/admincalendar']);
        console.log(res, 'response');
        alert(res.message);
        this.event_name = '';
        this.event_date = '';
        this.color = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }


}
