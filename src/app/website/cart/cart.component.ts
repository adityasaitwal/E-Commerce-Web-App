import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartitem:any;

  constructor(private cartsrc:CartService){


    this.getbyid();


  }

  getbyid(){


    this.cartsrc.gettocart().subscribe(data=>{

      console.log(data);
      this.cartitem=data;
    })
  }

}
