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

    return this.http.post('api/register', data, options);
  }

  login(user) {
    const data = JSON.stringify({ user });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.http.post('api/login', data, options);
  }

  updateProfile(profile) {
    const data = JSON.stringify({ profile });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/profile', data, options);
  }

  changePassword(pass) {
    const data = JSON.stringify({ pass });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/password', data, options);
  }

  addPokemon(pokemon) {
    const data = JSON.stringify({ pokemon });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/addPokemon', data, options);
  }

  getMyPokemons() {
    return this.authHttp.get('api/getMyPokemons');
  }

  deletePokemon(i) {
    const data = JSON.stringify({ i });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/deletePokemon', data, options);
  }

  getPokemons() {
    return this.authHttp.get('api/getAll');
  }

  exchangePokemons(exchange) {
    const data = JSON.stringify({ exchange });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/exchangePokemon', data, options);
  }

  getTradeRequests() {
    return this.authHttp.get('api/getRequests');
  }

  rejectYours(request) {
    const data = JSON.stringify({ request });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/rejectYours', data, options);
  }

  rejectOther(request) {
    const data = JSON.stringify({ request });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/rejectOther', data, options);
  }

  acceptRequest(request) {
    const data = JSON.stringify({ request });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('api/acceptRequest', data, options);
  }
}
