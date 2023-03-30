import { Component } from '@angular/core';
import { AboutserviceService } from 'src/app/service/aboutservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutprod: any;

  constructor(private aboutsrc: AboutserviceService) {

    this.getaboutdata();


  }

  getaboutdata() {

    this.aboutsrc.getabout().subscribe(data => {
      console.log(data);
      this.aboutprod = data;
    })


  }

  deleteaboutdata(aboutprod: any) {


    if (confirm("Do you really want to delete?")) {
      this.aboutsrc.deleteabout(aboutprod).subscribe(Data => {

        console.log(Data);
        alert("One Section Deleted");
        this.getaboutdata();

      })

    }

  }

}
