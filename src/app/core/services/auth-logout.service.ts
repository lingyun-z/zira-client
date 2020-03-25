import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const CHECK_INTERVAL = 1000; // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root',
})
export class AuthLogoutService {
  logoutDuration = 20;

  constructor(public authService: AuthService) {
    this.authService.hasLoggedIn$.subscribe(hasLoggedIn => {
      if (hasLoggedIn) {
        this.reset();
        this.check();
        this.initListener();
        this.initInterval();
      }
    });
  }

  get lastAction() {
    return parseInt(localStorage.getItem(STORE_KEY), 10);
  }

  set lastAction(value) {
    localStorage.setItem(STORE_KEY, String(value));
  }

  private initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  private reset() {
    this.lastAction = Date.now();
  }

  private initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  private check() {
    const now = Date.now();
    const expiresAt = Number(localStorage.getItem('expiresAt'));
    const timeLeft = this.lastAction + this.logoutDuration * 60 * 1000;
    const isTimeout = timeLeft < now && expiresAt < now;
    if (isTimeout) {
      localStorage.removeItem(STORE_KEY);
      this.authService.logout();
    }
  }
}
