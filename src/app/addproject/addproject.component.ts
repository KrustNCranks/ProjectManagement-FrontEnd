import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

    name: String;
    projectDescription: String;
    startDate: String;
    deadline: String;
    projectOwner: String;
    collaboraters: String;
    resources: String;

  constructor(private AuthService:AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

    addProject(){
        const project = {
            name: this.name,
            projectDescription: this.projectDescription,
            startDate: this.startDate,
            deadline: this.deadline,
            projectOwner: this.projectOwner,
            collaboraters: this.collaboraters,
            resources: this.resources
        };
        console.log(project);
        this.AuthService.addProject(project).subscribe(res=>{
            console.log(res);
            if(res.state){
                this.router.navigate(['/projects'],{relativeTo: this.route});
            }else
            {
                // If Sucessfull
                this.router.navigate(['/allprojects'],{relativeTo: this.route});
            }
        });
    }



}
