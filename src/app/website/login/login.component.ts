import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GetserviceService } from 'src/app/service/getservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform: any;
  data: any;

  constructor(private getsrc: GetserviceService, private router: Router) {


  }

  ngOnInit():void {

    this.loginform = new FormGroup(

      {

        email: new FormControl(''),
        password: new FormControl('')

      })

  }

  userlogin() {

    console.log(this.loginform.value);
    this.getsrc.getdata().subscribe((data: any) => {

      console.log(data)

      const username = data.find((a: any) => {

        return a.email === this.loginform.value.email && a.password === this.loginform.value.password

      })

      if (username) {

        alert("Login Successful");
        this.router.navigate(['/frontend/home'])
      }

      else {

        alert("User not found");
      }

    })

  }

}
