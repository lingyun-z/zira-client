import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'app/core/services/auth.service';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  isLogged: boolean;
  currentUser;

  constructor(
    private authService: AuthService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private userService: UserService,
  ) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icons.svg'),
    );
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.currentUser = data;
    });

    this.authService.hasLoggedIn$.subscribe(loggedIn => {
      this.isLogged = loggedIn;
    });
  }

  public logout() {
    this.authService.logout();
  }
}
