import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'app/core/services/auth.service';
import { UserService } from 'app/core/services/user.service';
import { ToastService } from 'app/core/services/toast.service';
import { ToastColorOption } from 'app/core/types';

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
  signUpFormGroup = new FormGroup({
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });
  loginFailed = false;
  showSignUp = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {}

  formChange() {
    this.showSignUp = !this.showSignUp;
  }

  public login() {
    this.authService.getAuthToken(this.loginFormGroup.value).subscribe(data => {
      if (!!data) {
        this.authService.login(data);
      } else {
        this.loginFailed = true;
      }
    });
  }

  public signUp() {
    this.userService.addUser(this.signUpFormGroup.value).subscribe(data => {
      if (data) {
        this.showSignUp = false;
        this.toastService.show(
          'Sign up success, please login.',
          ToastColorOption.SUCCESS,
          5000,
        );
        this.loginFormGroup.setValue({
          mail: this.signUpFormGroup.value.mail,
          password: null,
        });
      }
    });
  }
}
