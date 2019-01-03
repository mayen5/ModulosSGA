import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salon } from './../components/interfaces/salon.interface';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  API_URL = environment.apiEndPoint;
  TOKEN = environment.token;
  constructor(private _httpClient: HttpClient) {
    console.log('Servicio de salones iniciado');
   }
   getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    const headers = new HttpHeaders({'Authorization' : `Bearer ${ this.TOKEN }`});
    return this._httpClient.get(url , { headers });
   }

   getSalones() {
    return this.getQuery('SalonesApi');
  }

  getSalon(id: number) {
    return this.getQuery(`SalonesApi/${id}`);
  }

  getHeaders() {
    const headers = new HttpHeaders()
    .set('Content-type', 'application/json')
    .set('Authorization', `Bearer ${ this.TOKEN }`);
    return headers;
  }

  addSalon(salon: Salon) {
    const body = JSON.stringify(salon);
    console.log(body);
    const url = `${this.API_URL}SalonesApi`;
    console.log(url);
    return this._httpClient.post(url , body, { headers: this.getHeaders() });
  }

  updateSalon(salon: Salon) {
    const body = JSON.stringify(salon);
    const url = `${this.API_URL}SalonesApi/${salon.SalonId}`;
    return this._httpClient.put(url , body, { headers: this.getHeaders() });
  }

  deleteSalon(id: number) {
    const url = `${this.API_URL}SalonesApi/${id}`;
    return this._httpClient.delete(url , { headers: this.getHeaders() });
  }
}
