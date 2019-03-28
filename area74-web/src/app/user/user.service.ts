import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class UserService {
  /**
   * Watch this for user changes, if you need to be absolutely certain, call loadUser where needed.
   */
  currentUser: Observable<User>;
  redirectUrl: string;
  private currentUserSubject: BehaviorSubject<User>;

  get isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(undefined);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>('user').pipe(
      map((user: User) => {
        this.currentUserSubject.next(user);
        return user;
      }),
      catchError(error => {
        this.currentUserSubject.next(undefined);
        return throwError(error);
      })
    );
  }

  /**
   * Call this to just execute a retrieval of the user and update the Observable in this class
   */
  retrieveUser(): void {
    this.getCurrentUser().subscribe(() => {}, () => {});
  }

  login(username: string, password: string) {
    if (!username || !password) {
      // TODO: display error msg
      return;
    }

    return this.http.post<any>('login', { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }
}
