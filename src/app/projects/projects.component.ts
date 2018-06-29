import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private AuthService:AuthenticationService) { }

  ngOnInit() {
      this.AuthService.getProjects();
  }


}
