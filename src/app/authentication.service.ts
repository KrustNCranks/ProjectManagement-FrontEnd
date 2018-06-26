import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    private token: string;

  constructor(private http: Http, private  router: Router) { }

}
