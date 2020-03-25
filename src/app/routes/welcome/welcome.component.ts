import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  loginFormGroup = new FormGroup({
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  loginFailed = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public login() {
    this.authService
      .getAuthToken({ mail: this.loginFormGroup.controls.mail.value })
      .subscribe(data => {
        if (!!data) {
          this.authService.login(data);
        } else {
          this.loginFailed = true;
        }
      });
  }
}
