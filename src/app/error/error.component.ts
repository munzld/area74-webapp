import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less']
})
export class ErrorComponent implements OnInit {

  title: string;
  message: string;
  linkHref: string;
  linkText: string;

  /**
   * @param {ActivatedRoute} route The current route from the router
   */
  constructor (private route: ActivatedRoute) {
  }

  /**
   * Show the proper error message based on the error type
   */
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      switch (params['errorType']) {
        case('404'):
          this.title = 'oops...';
          this.message = 'The link you followed may be broken or the page may have been removed.';
          this.linkHref = '/';
          this.linkText = 'Return to home';
          break;
        case('403'):
          this.title = 'unauthorized';
          this.message = 'You are not logged in, please login and try again.';
          this.linkHref = '/login';
          this.linkText = 'Return to Log in';
          break;
        case('401'):
          this.title = 'access denied';
          this.message = 'You do not have permissions to access the requested resource.';
          this.linkHref = '/';
          this.linkText = 'Return to home';
          break;
        case('timeout'):
          this.title = 'session timeout';
          this.message = 'To use the application, you\'ll need to login again.';
          this.linkHref = '/login';
          this.linkText = 'Return to Log In';
          break;
        default:
          this.title = 'system error';
          this.message = 'The system was unable to respond. Try again, and reach out to your ' +
            'support contact if you continue to see this error.';
          break;
      }
    });
  }

}
