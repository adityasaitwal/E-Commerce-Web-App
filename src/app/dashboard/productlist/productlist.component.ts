import { Component } from '@angular/core';
import { ProdserviceService } from 'src/app/service/prodservice.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  product: any;

  constructor(private src: ProdserviceService, public sanitizer: DomSanitizer) {

    this.getproduct();

  }

  getproduct() {

    this.src.getprod().subscribe(Data => {
      // console.log(Data);
      this.product = Data;

    })
  }

  deleteitem(product: any) {

    if (confirm("Do you really want to delete?")) {

      this.src.deleteproduct(product).subscribe(Data => {
        console.log(Data);
        alert("One Product Deleted");
        this.getproduct();
      })
    }


  }

}
