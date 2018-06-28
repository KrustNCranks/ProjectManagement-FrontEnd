import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    user:any;
    authToken: any;
  constructor(private http: Http) { }

    // Take user object and signs up with the backend
    signUpUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post("http://localhost:3000/user/signup",user,{headers:headers}).map(res=>res.json());
    }

    // logs in a user
    loginUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).map(res=>res.json());
    }

    // Stores token data in Browser local Storage
    storeData(token){
        localStorage.setItem("tokenId", token);
        this.authToken = token;
    }

    getProjects(){
        let headers = new Headers();
        // headers.append('Authorization',);
        headers.append('Content-Type','application/json');
        return this.http.post("http://localhost:3000/projects",{headers:headers}).map(res=>res.json());
    }


}
