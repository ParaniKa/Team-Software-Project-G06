import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private bookingService:BookingService){}

  
  booking_status!: string
  payment_date!: any
  payment_total!:any
  
  

  errors: any = [];

  saveBooking(){
    var inputData = {
      payment_date:this.payment_date,
      payment_total:this.payment_total,
      booking_status:this.booking_status,
      
    }

    this.bookingService.saveBooking(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);

        this.payment_date ='';
        this.payment_total ='';
        this.booking_status ='';
        

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }

}

