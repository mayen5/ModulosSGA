import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Carrera } from './../components/interfaces/carrera.interface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  API_URL = environment.apiEndPoint;
  constructor(private _httpClient: HttpClient, private _loginService: LoginService) {
    console.log('Servicio de carreras iniciado');
   }

   getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    return this._httpClient.get(url , { headers: this._loginService.getHeadersToken() });
   }

   getCarreras() {
    return this.getQuery('CarrerasApi');
  }

  getCarrera(id: number) {
    return this.getQuery(`CarrerasApi/${id}`);
  }


  addCarrera(carrera: Carrera) {
    const body = JSON.stringify(carrera);
    console.log(body);
    const url = `${this.API_URL}CarrerasApi`;
    console.log(url);
    return this._httpClient.post(url , body, { headers: this._loginService.getHeadersToken() });
  }

  updateCarrera(carrera: Carrera) {
    const body = JSON.stringify(carrera);
    const url = `${this.API_URL}CarrerasApi/${carrera.CarreraId}`;
    return this._httpClient.put(url , body, { headers: this._loginService.getHeadersToken() });
  }

  deleteCarrera(id: number) {
    const url = `${this.API_URL}CarrerasApi/${id}`;
    return this._httpClient.delete(url , { headers: this._loginService.getHeadersToken() });
  }
}
