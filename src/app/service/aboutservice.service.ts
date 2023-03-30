import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutserviceService {

  constructor(private http: HttpClient) {

  }

  abouturl = "http://localhost:3000/about";

  getabout() {

    return this.http.get(this.abouturl);

  }

  postabout(data: any) {

    return this.http.post(this.abouturl, data)
  }

  deleteabout(id: number) {

    return this.http.delete(`${this.abouturl}/${id}`)
  }

  patchaboutdata(id: number) {

    return this.http.get(`${this.abouturl}/${id}`)
  }

  updateaboutdata(id: number, data: any) {

    return this.http.put(`${this.abouturl}/${id}`, data)
  }

}
