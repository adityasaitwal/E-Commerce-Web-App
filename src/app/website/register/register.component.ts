import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { GetserviceService } from 'src/app/service/getservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerform: any;

  constructor(private source:GetserviceService, private router:Router){

  }

  ngOnInit() {

    this.registerform = new FormGroup({

      name: new FormControl(''),
      email:new FormControl(''),
      number:new FormControl(''),
      password1:new FormControl(''),
      password2:new FormControl('')

    })

    
  }

  userregister(){

    console.log(this.registerform.value);
    this.source.postdata(this.registerform.value).subscribe(Data =>{
      console.log(Data);
      this.router.navigate(['/frontend/login'])


    })
    alert("Registration Successful, Please Login!!");

  }

}