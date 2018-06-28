import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private AuthService:AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  logoutUser() {
      this.AuthService.logout();
      this.router.navigate(['/login'], {relativeTo: this.route});
      return false;
  }
}
