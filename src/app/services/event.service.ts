import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EventResponse {
  id: number
  event_name: string
  hall_description: string
  food_description: string
  created_at: string
  updated_at:string
}

export interface EventResponseType{
  status: Number,
  events: EventResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) {}
  //add events form
  saveEvent(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/event/store',inputData);
  }

  //show all data in table
  getEvents(){
    return this.httpClient.get<EventResponseType>('http://127.0.0.1:8000/api/event/index');
  }

  //get the data for particular id to edit form
  getEvent(eventId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/event/show/'+eventId);
  }

  //to update button
  updateEvent(inputData: object, eventId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/event/update/'+eventId,inputData);

  }
  destoryEvent(eventId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/event/delete/'+eventId);
  }
}
