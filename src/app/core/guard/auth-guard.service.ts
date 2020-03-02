import { Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Location } from '@angular/common';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
  ) {}

  canLoad(route: Route): Observable<boolean> | boolean {
    return this.authService.hasLoggedIn$
      .map(loggedIn => {
        if (loggedIn) {
          return true;
        }
        if (!loggedIn) {
          localStorage.setItem('targetUrl', this.location.path(true));
          this.router.navigate(['/welcome'], { replaceUrl: true });
        }
        return false;
      })
      .take(1);
  }
}
