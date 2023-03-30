import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  sliderurl="http://localhost:3000/slider"

  constructor(private http:HttpClient) { 


  }

  getslider(){

    return this.http.get(this.sliderurl)

  }

  posttoslider(data:any){

    return this.http.post(this.sliderurl, data)
  }

  deletefromslider(id:any){

    return this.http.delete(`${this.sliderurl}/${id}`)
  }
  
}
