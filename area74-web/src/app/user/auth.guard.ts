import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, RouterStateSnapshot, CanLoad, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuthenticated(state.url);
  }

  canLoad(route: Route): boolean {
    return this.isAuthenticated(route.path);
  }

  private isAuthenticated(url: string): boolean {
    const currentUser = this.userService.currentUserValue;
    if (currentUser) {
      return true;
    }

    this.userService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
