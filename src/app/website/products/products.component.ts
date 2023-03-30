import { Component } from '@angular/core';
import { ProdserviceService } from 'src/app/service/prodservice.service';
import { CartService } from 'src/app/service/cart.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  cardproduct: any;
  cardpost: any;

  constructor(private prodsrc: ProdserviceService, private cartsrc: CartService) {

    this.getcardproduct();
    // this.postcardproduct();


  }

  getcardproduct() {

    this.prodsrc.getprod().subscribe(Data => {

      console.log(Data);
      this.cardproduct = Data;

    })
  }

  postcardproduct() {


    console.log(this.cardpost.value);
    this.cartsrc.posttocart(this.cardpost.value).subscribe(data => {

      console.log(data);
    })


  }


}
