import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: String;
  lastname: String;
  dateOfBirth: String;
  email: String;
  username: String;
  password: String;

  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  signUpUser(){
    const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        dateOfBirth: this.dateOfBirth,
      email: this.email,
      username: this.username,
      password: this.password
    };
    console.log(user);
    this.AuthService.signUpUser(user).subscribe(res=>{
        console.log(res);
        if(res.state){
            this.router.navigate(['/login'],{relativeTo: this.route});
        }else
        {
            // If Sucessfull
            this.router.navigate(['/signupsuccess'],{relativeTo: this.route});
        }
    });
  }
}
