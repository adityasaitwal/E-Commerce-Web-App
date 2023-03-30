import { Component } from '@angular/core';
import { GetserviceService } from 'src/app/service/getservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  item:any;

  constructor(private src: GetserviceService){

    this.getData();


  }

  getData(){
    this.src.getdata().subscribe(Data =>{
      console.log(Data);
      this.item=Data;
    })
  }



}


