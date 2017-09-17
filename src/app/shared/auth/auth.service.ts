import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { tokenNotExpired } from 'angular2-jwt';
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  isAuthenticatedChanged = new ReplaySubject<boolean>(1);
  profile = new ReplaySubject<any>(1);
  private lock: any;

  constructor(public router: Router) {
    const options = {
      auth: {
        redirectUrl: window.location.protocol + '//' + window.location.host + '/callback',
        responseType: 'token id_token',
        params: {
          scope: 'openid profile email'
        }
      },
      language: 'de',
      theme: {
        logo: 'https://ngbestpractice.firebaseapp.com/assets/scrat-120.png',
        primaryColor: '#b52e31'
      },
      languageDictionary: {
        emailInputPlaceholder: 'scrat@cornelsen.de',
        title: 'Login'
      }
    };
    this.lock = new Auth0Lock(
      'LGPXnx62HezJKbcdO1LsM3Vzoe1FqhUR',
      'goetze-cornelsen.eu.auth0.com',
      options
    );

    this.lock.on('authenticated', (authResult) => {
      this.setSession(authResult);
      this.setProfile();
      this.isAuthenticatedChanged.next(this.isAuthenticated());
      this.redirectToLastUrl();
    });

    if (this.isAuthenticated()) {
      this.setProfile();
      this.isAuthenticatedChanged.next(true);
    }

    this.isAuthenticatedChanged.subscribe(x => console.log(x));
  }

  public login(redirectUrl?: string): void {
    if (redirectUrl) {
      sessionStorage.setItem('redirectUrl', redirectUrl);
    }

    this.lock.show();
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
    this.isAuthenticatedChanged.next(this.isAuthenticated());
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired('id_token');
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  private setProfile() {
    const accessToken = localStorage.getItem('access_token');
    this.lock.getUserInfo(accessToken, (error, profile) => {
      if (error) {
        // Handle error
        return;
      }

      this.profile.next(profile);
    });
  }

  private redirectToLastUrl(): void {
    const redirectUrl = sessionStorage.getItem('redirectUrl');

    if (redirectUrl) {
      sessionStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redirectUrl);
    }
  }
}
