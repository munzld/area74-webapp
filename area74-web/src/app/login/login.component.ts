import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private userService: UserService, private router: Router) {}

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const username = loginForm.form.value.username;
      const password = loginForm.form.value.password;
      this.userService.login(username, password);
      this.router.navigateByUrl(this.userService.redirectUrl);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
