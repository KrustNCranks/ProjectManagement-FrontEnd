import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';



@Injectable()
export class AuthenticationService {

    user:any;
    authToken: any;
    project:any;
    resource:any;
    task:any;
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
        this.fetchToken();
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+this.authToken);
        return this.http.get("http://localhost:3000/projects",{headers:headers}).map(res=>res.json());
    }

    getResources(){
        this.fetchToken();
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+this.authToken);
        return this.http.get("http://localhost:3000/resources",{headers:headers}).map(res=>res.json());
    }

    getTasks(){
        this.fetchToken();
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+this.authToken);
        return this.http.get("http://localhost:3000/tasks",{headers:headers}).map(res=>res.json());
    }

    addProject(project){
        this.fetchToken();
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+this.authToken);
        return this.http.post("http://localhost:3000/projects",project,{headers:headers}).map(res=>res.json());
    }

    addResources(resource){
        this.fetchToken();
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+this.authToken);
        return this.http.post("http://localhost:3000/resources",resource,{headers:headers}).map(res=>res.json());
    }

    addTask(task){
        this.fetchToken();
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+this.authToken);
        return this.http.post("http://localhost:3000/tasks",task,{headers:headers}).map(res=>res.json());
    }

    fetchToken(){
      const token = localStorage.getItem("tokenId");
      this.authToken = token;
    }

    public logout(){
      this.authToken = null;
      localStorage.clear();
  }











}
