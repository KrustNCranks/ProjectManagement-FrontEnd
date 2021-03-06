import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    AllProjects: any =[];
  constructor(private AuthService:AuthenticationService) { }

  ngOnInit() {
      this.AuthService.getProjects().subscribe(res=>{
          this.AllProjects = res;
          console.log(this.AllProjects);
      })
  }


}
