import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  get isAdmin(): Promise<boolean> {
    return firebase
      .auth()
      .currentUser.getIdTokenResult(true)
      .then(idTokenResult => {
        console.log(JSON.stringify('idTokenResult: ' + idTokenResult));
        if (idTokenResult.claims.admin) {
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then(
        res => {
          resolve(res);
        },
        err => reject(err)
      );
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}
