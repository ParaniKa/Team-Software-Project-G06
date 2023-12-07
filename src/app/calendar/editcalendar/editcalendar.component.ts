import { Component } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editcalendar',
  templateUrl: './editcalendar.component.html',
  styleUrls: ['./editcalendar.component.css']
})
export class EditcalendarComponent {
  calendarId!: any;
  calendars!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private calendarService: CalendarService,private router:Router){

  }

  ngOnInit(){
    this.calendarId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.calendarService.getCalendar(this.calendarId).subscribe((res:any) => {
      console.log(res)
      this.calendars = res.calendars
  });
  }

  updateCalendar(){
    var inputData = {
      event_name:this.calendars.event_name,
      event_date:this.calendars.event_date,
      color:this.calendars.color,
    }
    this.calendarService.updateCalendar(inputData,this.calendarId).subscribe({
      next:(res:any) => {
        this.router.navigate(['/calendar/admincalendar']);
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
