import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carturl = "http://localhost:3000/cart"


  constructor(private http: HttpClient) {


  }

  gettocart() {

    return this.http.get(this.carturl)

  }

  posttocart(data:any) {

    return this.http.post(this.carturl, data)
  }
}
