import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

    AllResources: any =[];
    constructor(private AuthService:AuthenticationService) { }

    ngOnInit() {
        this.AuthService.getResources().subscribe(res=>{
            this.AllResources = res;
            console.log(this.AllResources);
        })
    }
}
