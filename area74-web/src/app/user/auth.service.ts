import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable()
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private router: Router) { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      return;
    }

    this.currentUser = {
      id: 2,
      userName: userName
    };

  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/home']);
  }
}
