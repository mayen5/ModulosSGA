import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  API_URL = environment.apiEndPoint;
  TOKEN = environment.token;
  constructor(private _httpClient: HttpClient) { }
  getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    const headers = new HttpHeaders({'Authorization' : `Bearer ${ this.TOKEN }`});
    return this._httpClient.get(url , { headers });
  }
  getAlumnos() {
    return this.getQuery('AlumnosApi');
  }
}
