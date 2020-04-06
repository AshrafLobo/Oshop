import { Component } from '@angular/core';
import { AuthService, UserService } from './shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private userService: UserService, private auth: AuthService, router: Router) {
      auth.user$.subscribe(user => {
        if(user) {
          this.userService.save(user);

          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      })
    }
}
