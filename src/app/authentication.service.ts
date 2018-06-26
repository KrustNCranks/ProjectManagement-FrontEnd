import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    user:any;
  constructor(private http: Http) { }

    signUpUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post("http://localhost:3000/user/signup",user,{headers:headers}).map(res=>res.json());
    }
}
