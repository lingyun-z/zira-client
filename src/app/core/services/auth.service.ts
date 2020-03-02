import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  public hasLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );
  constructor(
    private apollo: Apollo,
    private router: Router,
    private userService: UserService,
  ) {}

  public async login() {
    await this.apollo.getClient().resetStore();
    await this.handleAuthentication();
  }

  public handleAuthentication() {
    return new Promise(async () => {
      const authResult = this.getAuthToken();

      const expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime(),
      );
      localStorage.setItem('token', authResult.token);
      localStorage.setItem('expiresAt', expiresAt);
      const targetUrl = !!localStorage.getItem('targetUrl')
        ? localStorage.getItem('targetUrl')
        : '/project';
      this.router.navigate([targetUrl], { replaceUrl: true });
      this.hasLoggedIn$.next(true);
    });
  }

  private getAuthToken(): any {
    return { token: 'this_is_a_token', expiresIn: 3600 };
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
    return new Date().getTime() < expiresAt;
  }

  public logout() {
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('token');
    this.hasLoggedIn$.next(false);
    this.userService.setCurrentUser(null);
    setTimeout(() => {
      this.apollo.getClient().resetStore();
    }, 1000);
    this.router.navigate(['/welcome'], { replaceUrl: true });
  }
}
