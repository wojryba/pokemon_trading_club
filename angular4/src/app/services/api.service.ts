import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class ApiService {

  constructor(private http: Http, private authHttp: AuthHttp) { }

  register(user) {
    const data = JSON.stringify({ user });
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/api/register', data, options);
  }

  login(user) {
    const data = JSON.stringify({ user });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://localhost:3000/api/login', data, options);
  }

  updateProfile(profile) {
    const data = JSON.stringify({ profile });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('http://localhost:3000/api/profile', data, options);
  }

  changePassword(pass) {
    const data = JSON.stringify({ pass });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('http://localhost:3000/api/password', data, options);
  }

}
