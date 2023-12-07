import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ContactResponse {
  id: number
  name: string
  email: string
  mobilenumber: any
  message:string
  created_at: string
  updated_at:string
}
export interface ContactResponseType{
  status: Number,
  contacts: ContactResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  saveContact(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/contact/store',inputData);
  }

  //show all data in table
  getContacts(){
    return this.httpClient.get<ContactResponseType>('http://127.0.0.1:8000/api/contact/index');
  }

  //get the data for particular id to edit form
  getContact(eventId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/contact/show/'+eventId);
  }

  //to update button
  //updateEvent(inputData: object, eventId: number){
    //return this.httpClient.put('http://127.0.0.1:8000/api/event/update/'+eventId,inputData);

  //}
  destoryContact(eventId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/contact/delete/'+eventId);
  }
}
