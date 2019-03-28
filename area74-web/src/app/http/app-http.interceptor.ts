import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { HttpStatusService } from './http.status.service';

/**
 * Intercepts all HTTP requests and appends APP URL Base if necessary
 * also sets X-Requested-With and Content-Type headers.
 */
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  appBaseUrl = '/area74-server/';

  constructor(private router: Router, private httpStatusService: HttpStatusService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.httpStatusService.startRunning();

    // Clone the request and set the proper URL and headers
    const newRequest = req.clone({
      url: this.determineUrl(req.url),
      headers: req.headers
        .set('X-Requested-With', 'XMLHttpRequest')
        .set('Content-Type', 'application/json')
    });

    return next.handle(newRequest).pipe(
      tap((event: HttpEvent<any>) => {
        // Handle success
        if (event instanceof HttpResponse) {
          this.httpStatusService.stopRunning();
        }
      }, (error: HttpErrorResponse) => {
        this.httpStatusService.stopRunning();
        // errors, redirect to auth error page
        // feel free to change for specific application purposes
        if (error.status === 403) {
          this.router.navigate(['error/403']);
        } else if (error.status === 401) {
          this.router.navigate(['error/401']);
        }
      })
    );
  }

  /**
   * Make sure we can call relative URLs with the app base
   */
  private determineUrl(url: string): string {
    if (url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    } else if (!url.startsWith(this.appBaseUrl)) {
      return this.appBaseUrl + url;
    }
  }
}
