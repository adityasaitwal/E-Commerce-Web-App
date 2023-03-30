import { Component } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  slide: any;

  constructor(private slidersrc: SliderService) {

    this.getsliderimage();


  }

  getsliderimage() {

    this.slidersrc.getslider().subscribe(data => {

      console.log(data);
      this.slide = data;
    })



  }

  deletesliderimage(slide: any) {

    if (confirm("Do you really want to delete?")) {

      this.slidersrc.deletefromslider(slide).subscribe(data => {
        console.log(data);
        alert("One Image deleted")
        this.getsliderimage();
      })
    }

  }

}
