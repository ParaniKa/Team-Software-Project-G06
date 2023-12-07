import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SubscribeResponse {
  id: number
  email: string
  created_at: string
  updated_at:string
}

export interface SubscribeResponseType{
  status: Number,
  subscribes: SubscribeResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private httpClient: HttpClient) { }

  saveSubscribe(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/subscribe/store',inputData);
  }

  //show all data in table
  getSubscribes(){
    return this.httpClient.get<SubscribeResponseType>('http://127.0.0.1:8000/api/subscribe/index');
  }

  //get the data for particular id to edit form
  getSubscribe(eventId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/subscribe/show/'+eventId);
  }

  //to update button
 // updateEvent(inputData: object, eventId: number){
    //return this.httpClient.put('http://127.0.0.1:8000/api/event/update/'+eventId,inputData);

 // }
  destorySubscribe(eventId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/subscribe/delete/'+eventId);
  }
}
