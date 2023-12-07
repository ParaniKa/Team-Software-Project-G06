import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PhotographyResponse {
  id: number
  package: string
  details: string
  price: any
  created_at: string
  updated_at:string
}

export interface PhotographyResponseType{
  status: Number,
  photographys: PhotographyResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {



  constructor(private httpClient: HttpClient) {
   }
   savePhotography(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/photography/store',inputData);
  }

  //show all data in table
  getPhotographys(){
    return this.httpClient.get<PhotographyResponseType>('http://127.0.0.1:8000/api/photography/index');
  }

  //get the data for particular id to edit form
  getPhotography(photographyId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/photography/show/'+photographyId);
  }

  //to update button
  updatePhotography(inputData: object, photographyId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/photography/update/'+photographyId,inputData);

  }
  destoryPhotography(photographyId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/photography/delete/'+photographyId);
  }

}
