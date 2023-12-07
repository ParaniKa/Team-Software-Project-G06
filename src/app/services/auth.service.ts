import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserResponse {
  id: number
  name: string
  email: string
  address: any
  mobilenumber: any
  password: string
  created_at: string
  updated_at:string
}

export interface UserResponseType{
  status: Number,
  users: UserResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}
  //add events form
  saveUser(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/user/store',inputData);
  }

  //show all data in table
  getUsers(){
    return this.httpClient.get<UserResponseType>('http://127.0.0.1:8000/api/user/index');
  }

  //get the data for particular id to edit form
  getUser(userId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/user/show/'+userId);
  }

  //to update button
  updateUser(inputData: object, userId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/user/update/'+userId,inputData);

  }
  destoryUser(userId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/user/delete/'+userId);
  }
}
