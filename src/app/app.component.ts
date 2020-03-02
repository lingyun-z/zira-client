import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
import { AuthLogoutService } from './core/services/auth-logout.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ZIRA-client';
  constructor(
    public authService: AuthService,
    public authLogoutService: AuthLogoutService,
    private userService: UserService,
  ) {
    if (this.authService.isAuthenticated()) {
      this.authService.hasLoggedIn$.next(true);
    }
    this.authService.hasLoggedIn$.subscribe(loggedIn => {
      if (loggedIn) {
        this.userService.queryCurrentUser().subscribe(user => {
          this.userService.setCurrentUser(user);
        });
      }
    });
  }
}
