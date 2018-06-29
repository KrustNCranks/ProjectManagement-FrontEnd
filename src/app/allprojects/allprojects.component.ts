import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit {

    AllProjects: any =[];
    constructor(private AuthService:AuthenticationService) { }

    ngOnInit() {
        this.AuthService.getProjects().subscribe(res=>{
            this.AllProjects = res;
            console.log(this.AllProjects);
        })
    }
}
