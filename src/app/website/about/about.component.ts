import { Component } from '@angular/core';
import { AboutserviceService } from 'src/app/service/aboutservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  webab:any;

  constructor(private aboutwebsrc:AboutserviceService){

    this.getwebabout();


  }

  getwebabout(){

    this.aboutwebsrc.getabout().subscribe(data=>{

      console.log(data);
      this.webab=data;
    })

  }

}
