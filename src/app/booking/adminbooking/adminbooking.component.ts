import { Component } from '@angular/core';
import { BookingService,BookingResponse } from 'src/app/services/booking.service';

//import { BookingService,BookingResponse } from '../services/booking.service';

import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-adminbooking',
  templateUrl: './adminbooking.component.html',
  styleUrls: ['./adminbooking.component.css']
})
export class AdminbookingComponent {
  constructor(private bookingService: BookingService , private auth:AuthenticationService){}

  bookings!: BookingResponse[];
  user:any;

  ngOnInit(){
    this.getBookingLists();
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
  getBookingLists(){
    this.bookingService.getBookings().subscribe((res) => {
      console.log(res);
      this.bookings = res.bookings;
    });
  }


  deleteBooking(booking:any,bookingId:Number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        booking.target.innertext = "Deleting....";

        this.bookingService.destoryBooking(bookingId).subscribe((res:any) => {
           this.getBookingLists();
           alert(res.message);
        });

      }
  }

}
