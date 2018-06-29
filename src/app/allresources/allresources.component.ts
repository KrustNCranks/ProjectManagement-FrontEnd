import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-allresources',
  templateUrl: './allresources.component.html',
  styleUrls: ['./allresources.component.css']
})
export class AllresourcesComponent implements OnInit {

    AllResources: any =[];
    constructor(private AuthService:AuthenticationService) { }

    ngOnInit() {
        this.AuthService.getResources().subscribe(res=>{
            this.AllResources = res;
            console.log(this.AllResources);
        })
    }

}
