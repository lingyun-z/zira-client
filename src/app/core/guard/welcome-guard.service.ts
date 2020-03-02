import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WelcomeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.authService.hasLoggedIn$
      .map(loggedIn => {
        if (loggedIn) {
          const targetUrl = !!localStorage.getItem('targetUrl')
            ? localStorage.getItem('targetUrl')
            : '/project';
          this.router.navigate([targetUrl], {
            replaceUrl: true,
          });
          return false;
        }
        return true;
      })
      .take(1);
  }
}
