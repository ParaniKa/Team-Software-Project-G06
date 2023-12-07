import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BookingResponse {
  id: number
  customer_name: string
  customer_email: string
  event_name: any
  event_date: any
  event_start_time : any
  event_end_time : any
  payment_date :any
  payment_total :any
  payment_method :string

  total_guests :any
  food :string
  food_price :any
  photography :string
  photography_price :any
  booking_status :any

  file :any


  created_at: string
  updated_at:string
}


export interface BookingResponseType{
  status: Number,
  bookings: BookingResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  //add bookings form
  saveBooking(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/booking/store',inputData);
  }

  //show all data in table
  getBookings(){
    return this.httpClient.get<BookingResponseType>('http://127.0.0.1:8000/api/booking/index');
  }

  //get the data for particular id to edit form
  getBooking(bookingId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/booking/show/'+bookingId);
  }

  //to update button
  updateBooking(inputData: object, bookingId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/booking/update/'+bookingId,inputData);

  }
  destoryBooking(bookingId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/booking/delete/'+bookingId);
  }

  // getCalendars(){
  //   return this.httpClient.get<BookingResponseType>('http://127.0.0.1:8000/api/calendar/index');
  // }

  saveImage(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/booking/imageUpload',inputData);
  }
}
