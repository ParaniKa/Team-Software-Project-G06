import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CalendarService, CalendarResponse } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-admincalendar',
  templateUrl: './admincalendar.component.html',
  styleUrls: ['./admincalendar.component.css']
})
export class AdmincalendarComponent {

  constructor(private calendarService: CalendarService, private auth:AuthenticationService){}

  calendars!: CalendarResponse[];
  user:any;

  
  ngOnInit(){
    this.getCalendarLists();
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
  getCalendarLists(){
    this.calendarService.getCalendars().subscribe((res) =>{
      console.log(res);
      this.calendars = res.calendars
    });
  }


  deleteCalendar(food:any,foodId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        food.target.innertext = "Deleting....";

        this.calendarService.destoryCalendar(foodId).subscribe((res:any) => {
           this.getCalendarLists();
           alert(res.message);
        });

      }
  }
}
