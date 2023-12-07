import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent {
  bookingId!: any;
  bookings!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private bookingService: BookingService){

  }

  ngOnInit(){
    this.bookingId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.bookingService.getBooking(this.bookingId).subscribe((res:any) => {
      console.log(res)
      this.bookings = res.bookings
  });
  }

  updateBooking(){
    var inputData = {

      customer_name:this.bookings.customer_name,
      customer_email:this.bookings.customer_email,
      event_name:this.bookings.event_name,
      event_date:this.bookings.event_date,
      event_start_time:this.bookings.event_start_time,
      event_end_time:this.bookings.event_end_time,
      payment_date:this.bookings.payment_date,
      payment_total:this.bookings.payment_total,
      payment_method:this.bookings.payment_method,

      total_guests:this.bookings.total_guests,
      food:this.bookings.food,
      food_price:this.bookings.food_price,
      photography:this.bookings.photography,
      photography_price:this.bookings.photography_price,
      
      booking_status:this.bookings.booking_status,

    }
    this.bookingService.updateBooking(inputData,this.bookingId).subscribe({
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
