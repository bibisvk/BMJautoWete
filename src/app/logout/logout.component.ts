import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user = '';

  constructor(private router: Router,private keycloakservice: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions()
  }

  private initializeUserOptions(): void{
    this.user = this.keycloakservice.getUsername();
  }

  logout(): void{
    this.keycloakservice.logout('http://localhost:80/');
  }
  chodSpat(): void {
    this.router.navigate(['']);
  }

}
