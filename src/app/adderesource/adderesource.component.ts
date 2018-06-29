import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-adderesource',
  templateUrl: './adderesource.component.html',
  styleUrls: ['./adderesource.component.css']
})
export class AdderesourceComponent implements OnInit {

    name: String;
    type: String;


  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

    addResource(){
        const resource= {
            name: this.name,
            type: this.type
        };
        console.log(resource);
        this.AuthService.addResources(resource).subscribe(res=>{
            console.log(res);
            if(res.state){
                this.router.navigate(['/resources'],{relativeTo: this.route});
            }else
            {
                // If Sucessfull
                this.router.navigate(['/allresources'],{relativeTo: this.route});
            }
        });
    }

}
