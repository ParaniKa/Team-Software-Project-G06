import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FeedbackResponse {
  id: number
  name: string
  email: string
  mobilenumber: any
  message:string
  posting_date:any
  created_at: string
  updated_at:string
}

export interface FeedbackResponseType{
  status: Number,
  feedbacks: FeedbackResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  saveFeedback(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/feedback/store',inputData);
  }

  //show all data in table
  getFeedbacks(){
    return this.httpClient.get<FeedbackResponseType>('http://127.0.0.1:8000/api/feedback/index');
  }

  //get the data for particular id to edit form
  getFeedback(eventId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/feedback/show/'+eventId);
  }

  //to update button
 // updateEvent(inputData: object, eventId: number){
    //return this.httpClient.put('http://127.0.0.1:8000/api/event/update/'+eventId,inputData);

 // }
  destoryFeedback(eventId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/feedback/delete/'+eventId);
  }
}
