import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  constructor(private auth:AuthenticationService) {}

  user:any;

  ngOnInit(): void {
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


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
   plugins: [dayGridPlugin],
    //events: this.events,
  };
}
