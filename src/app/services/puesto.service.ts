import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Puesto } from './../components/interfaces/puesto.interface';


@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  API_URL = environment.apiEndPoint;
  TOKEN = environment.token;
  constructor(private _httpClient: HttpClient) { }
  getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    const headers = new HttpHeaders({'Authorization' : `Bearer ${ this.TOKEN }`});
    return this._httpClient.get(url , { headers });
   }

   getPuestos() {
    return this.getQuery('PuestosApi');
  }

  getPuesto(id: number) {
    return this.getQuery(`PuestosApi/${id}`);
  }

  getHeaders() {
    const headers = new HttpHeaders()
    .set('Content-type', 'application/json')
    .set('Authorization', `Bearer ${ this.TOKEN }`);
    return headers;
  }

  addPuesto(puesto: Puesto) {
    const body = JSON.stringify(puesto);
    console.log(body);
    const url = `${this.API_URL}PuestosApi`;
    console.log(url);
    return this._httpClient.post(url , body, { headers: this.getHeaders() });
  }

  updatePuesto(puesto: Puesto) {
    const body = JSON.stringify(puesto);
    const url = `${this.API_URL}PuestosApi/${puesto.PuestoId}`;
    return this._httpClient.put(url , body, { headers: this.getHeaders() });
  }

  deletePuesto(id: number) {
    const url = `${this.API_URL}PuestosApi/${id}`;
    return this._httpClient.delete(url , { headers: this.getHeaders() });
  }
}
