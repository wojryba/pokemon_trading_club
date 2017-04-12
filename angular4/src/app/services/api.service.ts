import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

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

}
