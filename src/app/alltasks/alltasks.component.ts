import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

    AllTasks: any =[];
    constructor(private AuthService:AuthenticationService) { }

    ngOnInit() {
        this.AuthService.getTasks().subscribe(res=>{
            this.AllTasks = res;
            console.log(this.AllTasks);
        })
    }

}
