import { Component } from '@angular/core';
import { ProdserviceService } from 'src/app/service/prodservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  postform: any;
  Data: any;
  isEditMode: boolean = false;
  imgurl: any;

  constructor(private postsource: ProdserviceService, private router: Router, private active: ActivatedRoute) {

    const productid = this.active.snapshot.params['id']

    if (productid) {

      this.isEditMode = true;
      this.postsource.patchdata(productid).subscribe(data => {

        this.postform.patchValue(data);
      })


    }

  }

  ngOnInit(): void {

    this.postform = new FormGroup({

      id: new FormControl(''),
      productname: new FormControl('',[Validators.required]),
      productdescription: new FormControl('',[Validators.required]),
      productprice: new FormControl('',[Validators.required]),
      productstock: new FormControl('',[Validators.required]),
      productimage: new FormControl('',[Validators.required])

    })



  }
  get productname(){

   
    return this.postform.get('productname');

  }

  get productdescription(){

    return this.postform.get('productdescription')
  }

  get productprice(){

    return this.postform.get('productprice')
  }

  get productstock(){

    return this.postform.get('productstock')
  }

  get productimage(){

    return this.postform.get('productimage')
  }
  onFileSelected(event: any) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () =>{
      this.imgurl = reader.result;

    }
    reader.readAsDataURL(file);
  
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.onload = (event: ProgressEvent) => {
    //     this.imgurl = (<FileReader>event.target).result;
    //   }

    //   reader.readAsDataURL(event.target.files[0]);
    // }
  }


  // onselectFile(e:any){

  //   if(e.target.files){ //files are used to get the input type files from the DOM.

  //     var reader = new FileReader(); //variable created to read the file
  //     reader.readAsDataURL(e.target.files[0]); //used to read data of files through index
  //     reader.onload=(event:any)=>{

  //       this.imgurl=event.target.result;
  //     }

  //   }

  // }



  addpro() {
    const obj = this.postform.value;
    obj.productimage = this.imgurl

    if (this.isEditMode) {

      this.postsource.updatedata(this.postform.controls.id.value, obj).subscribe(data => {

        console.log(data);
      })

    }

    else {

      console.log(this.postform.value);
      this.postsource.addproduct(this.postform.value).subscribe(Data => {
        console.log(Data);
        this.router.navigate(['productlist'])
      })

    }
  }

}





