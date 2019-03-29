import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private userService: UserService, private router: Router) {
    // redirect to home if already logged in
    if (this.userService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  login(loginForm: NgForm) {

    if (!loginForm || loginForm.invalid) {
      this.errorMessage = 'Please enter a user name and password.';
      return;
    }

    const username = loginForm.form.value.username;
    const password = loginForm.form.value.password;
    this.userService.login(username, password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.userService.redirectUrl]);
        },
        error => {
            // handle some errors
        });
  }
}
