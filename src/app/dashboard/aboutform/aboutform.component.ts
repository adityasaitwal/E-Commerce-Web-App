import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AboutserviceService } from 'src/app/service/aboutservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutform',
  templateUrl: './aboutform.component.html',
  styleUrls: ['./aboutform.component.css']
})
export class AboutformComponent {

  postab: any;
  isEditMode: boolean = false;
  data: any;

  constructor(private post: AboutserviceService, private router: Router, private active: ActivatedRoute) {

    const aboutname = this.active.snapshot.params['id']

    if (aboutname) {

      this.isEditMode = true;
      this.post.patchaboutdata(aboutname).subscribe(data => {

        this.postab.patchValue(data);
      })


    }

  }

  ngOnInit() {

    this.postab = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      img: new FormControl('')

    })
  }

  postaboutdata() {
    debugger;

    if (this.isEditMode) {

      this.post.updateaboutdata(this.postab.controls.id.value, this.postab.value).subscribe(data => {

        console.log(data);
      })

    }

    else {

      console.log(this.postab.value);
      this.post.postabout(this.postab.value).subscribe(Data => {
        console.log(Data);
        this.router.navigate(['about'])
      })

    }

  }

}
