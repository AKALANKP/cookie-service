import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router,private cookie:CookieService) {}

  

  userId = 'akalank';
  password = '123456';

 

  tryLogin() {
    if(this.userId==="akalank"){
      this.router.navigateByUrl("/dashboard");
      this.cookie.set("UserName",this.userId);

      //Getting Cookie Info
      alert("Cookie Details :"+ this.cookie.get("UserName"));
    } else{
      alert("User is error");
    }
  }

}
