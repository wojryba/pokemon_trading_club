import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }

  useJwtHelper() {
    const token = localStorage.getItem('token');
      /* console.log(
        this.jwtHelper.decodeToken(token),
        this.jwtHelper.getTokenExpirationDate(token),
        this.jwtHelper.isTokenExpired(token)
      ); */
      return this.jwtHelper.decodeToken(token);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return tokenNotExpired();
    } else {
      return false;
    }

  }

}
