//import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { BookingService, BookingResponse } from 'src/app/services/booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingcalender',
  templateUrl: './bookingcalender.component.html',
  styleUrls: ['./bookingcalender.component.css']
})
export class BookingcalenderComponent implements OnInit {

  constructor(private bookingService:BookingService){}

  date:any;

  events!: BookingResponse[];

  ngOnInit(): void {
   //this.getDates();
   //this.bookingService.getCalendars().subscribe((res)=>{
   //this.date = res;
//})
}





  // getDates(){
  //   this.bookingService.getCalendars().subscribe((res:any)=>{
  //     console.log(res);
  //     this.events = res.events
  //   })
    
  //}

   
  



  // bookings!: BookingResponse[];

  // ngOnInit(){
  //   this.getEventLists();
  // }

  // getEventLists(){
  //   this.bookingService.getCalendars().subscribe((res) =>{
  //     console.log(res);
  //     this.bookings = res.bookings
  //   });
  //}
  




 // events: any = [
   // {title: 'Present', date:'2023-09-02',color:'#0000FF'},
   //];

 

   

 calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
 plugins: [dayGridPlugin],
  //events: this.events,
};

}

