import { Component } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  home:any;

  constructor(private homesrc:SliderService){

    this.getimage();


  }

  getimage(){

    this.homesrc.getslider().subscribe((data:any)=>{
      console.log(data);
      this.home=data;
    })
  }

}
