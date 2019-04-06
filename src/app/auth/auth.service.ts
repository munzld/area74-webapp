import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { of, Subscription, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: 'area74.auth0.com',
    responseType: 'token id_token',
    redirectUri: environment.auth0.serverUrl + '/callback/',
    scope: 'openid'
  });
  idToken: string;
  accessToken: string;
  expiresAt: number;
  // Track authentication status
  loggedIn: boolean;
  loading: boolean;
  // Track Firebase authentication status
  loggedInFirebase: boolean;
  // Subscribe to the Firebase token stream
  firebaseSub: Subscription;
  // Subscribe to Firebase renewal timer stream
  refreshFirebaseSub: Subscription;

  constructor(public router: Router, private afAuth: AngularFireAuth, private http: HttpClient) {
    this.idToken = '';
    this.accessToken = '';
    this.expiresAt = 0;
  }

  login(): void {
    this.auth0.authorize();
  }

  handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
        this.router.navigate(['/service']);
      } else if (err) {
        this.router.navigate(['/service']);
        console.log(err);
      }
    });
  }

  renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  logout(): void {
    // Remove tokens and expiry time
    this.accessToken = '';
    this.idToken = '';
    this.expiresAt = 0;

    this.auth0.logout({
      returnTo: environment.auth0.serverUrl,
      clientID: environment.auth0.clientID
    });
  }

  isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this.accessToken && Date.now() < this.expiresAt;
  }

  // scheduleFirebaseRenewal() {
  //   // If user isn't authenticated, check for Firebase subscription
  //   // and unsubscribe, then return (don't schedule renewal)
  //   if (!this.loggedInFirebase) {
  //     if (this.firebaseSub) {
  //       this.firebaseSub.unsubscribe();
  //     }
  //     return;
  //   }
  //   // Unsubscribe from previous expiration observable
  //   this.unscheduleFirebaseRenewal();
  //   // Create and subscribe to expiration observable
  //   // Custom Firebase tokens minted by Firebase
  //   // expire after 3600 seconds (1 hour)
  //   const expiresAt = new Date().getTime() + 3600 * 1000;
  //   const expiresIn$ = of(expiresAt).pipe(
  //     mergeMap(expires => {
  //       const now = Date.now();
  //       // Use timer to track delay until expiration
  //       // to run the refresh at the proper time
  //       return timer(Math.max(1, expires - now));
  //     })
  //   );

  //   this.refreshFirebaseSub = expiresIn$.subscribe(() => {
  //     console.log('Firebase token expired; fetching a new one');
  //     this.getFirebaseToken();
  //   });
  // }

  // unscheduleFirebaseRenewal() {
  //   if (this.refreshFirebaseSub) {
  //     this.refreshFirebaseSub.unsubscribe();
  //   }
  // }

  private localLogin(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
  }

  // private getFirebaseToken() {
  //   // Prompt for login if no access token
  //   if (!this.accessToken) {
  //     this.login();
  //   }
  //   const getToken$ = () => {
  //     return this.http.get(`${environment.apiRoot}auth/firebase`, {
  //       headers: new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`)
  //     });
  //   };
  //   this.firebaseSub = getToken$().subscribe(
  //     res => this.firebaseAuth(res),
  //     err => console.error(`An error occurred fetching Firebase token: ${err.message}`)
  //   );
  // }

  // private firebaseAuth(tokenObj) {
  //   this.afAuth.auth
  //     .signInWithCustomToken(tokenObj.firebaseToken)
  //     .then(res => {
  //       this.loggedInFirebase = true;
  //       // Schedule token renewal
  //       this.scheduleFirebaseRenewal();
  //       console.log('Successfully authenticated with Firebase!');
  //     })
  //     .catch(err => {
  //       const errorCode = err.code;
  //       const errorMessage = err.message;
  //       console.error(`${errorCode} Could not log into Firebase: ${errorMessage}`);
  //       this.loggedInFirebase = false;
  //     });
  // }
}
