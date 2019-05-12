import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: '';

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value).then(
      res => {
        this.router.navigate(['/service']);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
