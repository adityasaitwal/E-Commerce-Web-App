import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  url="http://localhost:3000/register";

  constructor(private http: HttpClient) { 

  }

  getdata(){

    return this.http.get(this.url)
  }

  postdata(Data: any){

    return this.http.post(this.url, Data)


  }
}
