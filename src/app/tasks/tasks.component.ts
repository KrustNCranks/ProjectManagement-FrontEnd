import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    AllTasks: any =[];
  constructor(private AuthService:AuthenticationService) { }

  ngOnInit() {
          this.AuthService.getTasks().subscribe(res=>{
              this.AllTasks = res;
              console.log(this.AllTasks);
          })
      }

}
