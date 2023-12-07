import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { NgForm } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';

import * as pdfMake from "pdfmake/build/pdfmake";  
import * as pdfFonts from "pdfmake/build/vfs_fonts";  
//pdfMake.vfs = pdfFonts.pdfMake.vfs; 
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs; 


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  constructor(private bookingService:BookingService,private foodService: FoodService){}

  payment_methods=[' cash deposit', 'online payment'];
  customer_name!: string
  customer_email!: string
  event_name!: string
  event_date!: any
  event_start_time!:any
  event_end_time!:any
  booking_status = "Not Confirmed";
  payment_date!: any
  payment_total!:any
  payment_method!:any


  total_guests!:any
  food!: string
  food_price!: any
  photography!: string
  photography_price!: any
    


  errors: any = [];
  file:any


  price!:any
  package!: string




//   //file upload
// imageUpload(event:any){
//   //console.log(event);
//   this.file = event.target.files[0];
//   console.log(this.file);
//  }



// ngOnInit(){
//   this.foodService.getFoods().subscribe((res:any) => {
//     console.log(res)
//     this.package = res.package
// });
// }

  saveBooking(){
    var inputData = {
      customer_name:this.customer_name,
      customer_email:this.customer_email,
      event_name:this.event_name,
      event_date:this.event_date,
      event_start_time:this.event_start_time,
      event_end_time:this.event_end_time,
      payment_date:this.payment_date,
      payment_total:this.payment_total,
      payment_method:this.payment_method,

      total_guests:this.total_guests,
      food:this.food,
      food_price:this.food_price,
      photography:this.photography,
      photography_price:this.photography_price,


      booking_status:this.booking_status,

      //file:this.file
      
    }

    // var formdata = new FormData();

    // formdata.append("customer_name",this.customer_name);
    // formdata.append("customer_email",this.customer_email);
    // formdata.append("event_name",this.event_name);
    // formdata.append("event_date",this.event_date);
    // formdata.append("event_start_time",this.event_start_time);
    // formdata.append("event_end_time",this.event_end_time);
    // formdata.append("payment_date",this.payment_date);
    // formdata.append("payment_total",this.payment_total);
    // formdata.append("payment_method",this.payment_method);
    // formdata.append("booking_status",this.booking_status);

    // formdata.append("file" ,this.file, this.file);


    
    
    this.bookingService.saveBooking(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.generatePDF() ;

        this.customer_name = '';
        this.customer_email = '';
        this.event_name ='';
        this.event_date ='';
        this.event_start_time ='';
        this.event_end_time ='';
        this.payment_date ='';
        this.payment_total ='';
        this.payment_method ='';

        this.total_guests ='';
        this.food ='';
        this.food_price ='';
        this.photography ='';
        this.photography_price ='';

        this.booking_status ='Not Confirmed';
        //this.file ='';
        

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })

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



  generatePDF() {
    var inputData = {
      customer_name:this.customer_name,
      customer_email:this.customer_email,
      event_name:this.event_name,
      event_date:this.event_date,
      event_start_time:this.event_start_time,
      event_end_time:this.event_end_time,
      payment_date:this.payment_date,
      payment_total:this.payment_total,
      payment_method:this.payment_method,

      total_guests:this.total_guests,
      food:this.food,
      food_price:this.food_price,
      photography:this.photography,
      photography_price:this.photography_price,


      booking_status:this.booking_status,

      //file:this.file
      
    }

  
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
  
    let docDefinition = {
      header: 'Customer Booking Details',
      content: [
        {
          text: 'Date: ' + formattedDate,
        },
        {
          text: 'Time: ' + formattedTime,
        },
  
        {
          text: 'customer_name: ' + inputData.customer_name,
          style: 'header'
        },
        {
          text: 'customer_email: ' + inputData.customer_email,
        },
        {
          text: 'event_name: ' + inputData.event_name,
        },
        {
          text: 'event_date: ' + inputData.event_date,
          style: 'header'
        },
        {
          text: 'event_start_time: ' + inputData.event_start_time,
        },
        {
          text: 'event_end_time: ' + inputData.event_end_time,
        }, 
        {
          text: 'payment_date: ' + inputData.payment_date,
          style: 'header'
        },
        {
          text: 'payment_total: ' + inputData.payment_total,
        },
        {
          text: 'payment_method: ' + inputData.payment_method,
        },
        {
          text: 'total_guests: ' + inputData.total_guests,
          style: 'header'
        },
        {
          text: 'food: ' + inputData.food,
        },
        {
          text: 'food_price: ' + inputData.food_price,
        }, 
        {
          text: 'photography: ' + inputData.photography,
          style: 'header'
        },
        {
          text: 'photography_price: ' + inputData.photography_price,
        },
        {
          text: 'booking_status: ' + inputData.booking_status,
        },
      ]
    };
  
    //pdfMake.createPdf(docDefinition).open();
    pdfMake.createPdf(docDefinition).download(); 
   // pdfMake.createPdf(docDefinition).print();    

  }


}
