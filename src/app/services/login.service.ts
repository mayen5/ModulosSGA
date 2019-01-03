import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './../components/interfaces/usuario.interface';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_TOKEN = environment.urlToken;
  constructor( private _httpClient: HttpClient) { }

  login(user: Usuario) {
    const body = JSON.stringify(user);
    return this._httpClient.post<any>(`${this.URL_TOKEN}`, body, { headers: this.getHeaders()})
    .pipe(map(data => {
      if (data) {
        localStorage.setItem('access_token', data);
      }
      return data;
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getHeaders() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return headers;
  }

  getHeadersToken() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return headers;
  }
}
