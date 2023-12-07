import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.css']
})
export class EditbookingComponent {

  bookingId!: any;
  bookings!: any;

  errors: any = [];
  file:any


  constructor(private route: ActivatedRoute, private bookingService: BookingService,private router:Router){

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
        this.router.navigate(['/booking/adminbooking']);
        console.log(res);
        alert(res.message);
      },
      error: (err: any) => {
        console.log(err);
        this.errors = err.error.errors;
      }
    });
  }



  imageUpload(event:any){
    this.file = event.target.files[0];
  }
  saveImage(){
    const formData = new FormData();
    formData.append("file" ,this.file, this.file);
    //  this.bookingService.saveImage(formData).subscribe(res => {
    //   console.log(res);
    // });

    this.bookingService.saveImage(formData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    });

  }
}
