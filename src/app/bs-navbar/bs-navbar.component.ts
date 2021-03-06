import { Component } from '@angular/core';
import { AuthService } from '../shared';
import { AppUser } from '../models';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser

  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
  
  logout() {
    this.auth.logout();
  }
}
