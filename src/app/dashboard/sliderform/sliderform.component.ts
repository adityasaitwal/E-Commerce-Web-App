import { Component } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sliderform',
  templateUrl: './sliderform.component.html',
  styleUrls: ['./sliderform.component.css']
})
export class SliderformComponent {

  post: any;

  constructor(private sliderpost: SliderService) {

    // this.postslider();


  }

  ngOnInit() {

    this.post = new FormGroup({

      // id: new FormControl(''),
      slideimg: new FormControl('')


    })

  }

  postslider() {

    console.log(this.post.value);
    this.sliderpost.posttoslider(this.post.value).subscribe(data => {
      console.log(data);
    })



  }

}
