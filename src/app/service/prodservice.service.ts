import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  produrl = "http://localhost:3000/productlist";

  constructor(private http: HttpClient) {


  }

  getprod() {

    return this.http.get(this.produrl)

  }

  addproduct(data: any) {

    return this.http.post(this.produrl, data)
    
  }

  deleteproduct(id: number) {

    return this.http.delete(`${this.produrl}/${id}`)

  }

  patchdata(id: number){


    return this.http.get(`${this.produrl}/${id}`)
  }

  updatedata(id:number, data:any){

    return this.http.put(`${this.produrl}/${id}`, data)
  }

  getbyId(id: number){

    return this.http.get(`${this.produrl}/${id}`)


  }
}
