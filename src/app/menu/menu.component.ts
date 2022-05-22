import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

enum MENU { OSOBY, AUTA, VYPOZICKY, LOGOUT}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu = MENU;

  constructor(private router: Router) { }

  otvorMenu(m: MENU) {
    if (m === MENU.OSOBY) {
      this.router.navigate(['/customer']);
    }
    if (m === MENU.AUTA) {
      this.router.navigate(['/auto']);
    }
    if (m === MENU.VYPOZICKY) {
      this.router.navigate(['/borrowing']);
    }
    if (m === MENU.LOGOUT) {
      this.router.navigate(['/logout']);
    }
  }
}

