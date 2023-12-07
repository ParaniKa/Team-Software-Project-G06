import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CalendarResponse {
  id: number
  event_name: string
  event_date: any
  color:string
  created_at: string
  updated_at:string
}
export interface CalendarResponseType{
  status: Number,
  calendars: CalendarResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private httpClient: HttpClient) { }

  //add events form
  saveCalendar(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/calendar/store',inputData);
  }

  //show all data in table
  getCalendars(){
    return this.httpClient.get<CalendarResponseType>('http://127.0.0.1:8000/api/calendar/index');
  }

  //get the data for particular id to edit form
  getCalendar(foodId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/calendar/show/'+foodId);
  }

  //to update button
  updateCalendar(inputData: object, foodId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/calendar/update/'+foodId,inputData);

  }
  destoryCalendar(foodId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/calendar/delete/'+foodId);
  }
}
