import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: String;
    password: String;
  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loginUser(){
      const user = {
          username: this.username,
          password: this.password
      }
      this.AuthService.loginUser(user).subscribe(res=>{
          console.log(res);
          if(res.state){
              this.router.navigate(['/login'],{relativeTo: this.route});
          }else
          {
              // If Sucessfull
              this.AuthService.storeData(res.token);
              this.router.navigate(['/home'],{relativeTo: this.route});
          }
      })
  }

}
