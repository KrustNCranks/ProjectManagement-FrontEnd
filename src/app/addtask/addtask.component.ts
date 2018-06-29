import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  name: String;
  description: String;
  status: String;
  user: String;
  project: String;

  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

    addTask(){
        const task= {
            name: this.name,
            description: this.description,
            status: this.status,
            user: this.user,
            project: this.project
        };
        console.log(task);
        this.AuthService.addTask(task).subscribe(res=>{
            console.log(res);
            if(res.state){
                this.router.navigate(['/tasks'],{relativeTo: this.route});
            }else
            {
                // If Sucessfull
                this.router.navigate(['/alltasks'],{relativeTo: this.route});
            }
        });
    }

}
