import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuspiciousResponse {
  id: number
  auspicious_date: any
  auspicious_day: string
  auspicious_time_start: any
  auspicious_time_end: any
  created_at: string
  updated_at:string
}

export interface AuspiciousResponseType{
  status: Number,
  auspiciouss: AuspiciousResponse[]
}

@Injectable({
  providedIn: 'root'
})
export class AuspiciousService {


  constructor(private httpClient: HttpClient) { }

  //add events form
  saveAuspicious(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/auspicious/store',inputData);
  }

  //show all data in table
  getAuspiciouss(){
    return this.httpClient.get<AuspiciousResponseType>('http://127.0.0.1:8000/api/auspicious/index');
  }

  //get the data for particular id to edit form
  getAuspicious(auspiciousId: number){
    return this.httpClient.get('http://127.0.0.1:8000/api/auspicious/show/'+auspiciousId);
  }

  //to update button
  updateAuspicious(inputData: object, auspiciousId: number){
    return this.httpClient.put('http://127.0.0.1:8000/api/auspicious/update/'+auspiciousId,inputData);

  }
  destoryAuspicious(auspiciousId: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/auspicious/delete/'+auspiciousId);
  }
}
