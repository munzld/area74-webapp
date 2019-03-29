import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CanNotActivateViaAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.userService.getCurrentUser().pipe(
      map((user: User) => {
        this.router.navigate(['/']);
        return false;
      }),
      catchError(() => {
        return of(true);
      })
    );
  }
}
