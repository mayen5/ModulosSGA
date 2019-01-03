import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrupoAcademico } from './../components/interfaces/grupoAcademico.interface';


@Injectable({
  providedIn: 'root'
})
export class GrupoAcademicoService {

  API_URL = environment.apiEndPoint;
  TOKEN = environment.token;
  constructor(private _httpClient: HttpClient) {
    console.log('Servicio de grupos academicos iniciado');
   }
   getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    const headers = new HttpHeaders({'Authorization' : `Bearer ${ this.TOKEN }`});
    return this._httpClient.get(url , { headers });
   }

   getGruposAcademicos() {
    return this.getQuery('GruposAcademicosApi');
  }

  getGrupoAcademico(id: number) {
    return this.getQuery(`GruposAcademicosApi/${id}`);
  }

  getHeaders() {
    const headers = new HttpHeaders()
    .set('Content-type', 'application/json')
    .set('Authorization', `Bearer ${ this.TOKEN }`);
    return headers;
  }

  addGrupoAcademico(grupoAcademico: GrupoAcademico) {
    const body = JSON.stringify(grupoAcademico);
    console.log(body);
    const url = `${this.API_URL}GruposAcademicosApi`;
    console.log(url);
    return this._httpClient.post(url , body, { headers: this.getHeaders() });
  }

  updateGrupoAcademico(grupoAcademico: GrupoAcademico) {
    const body = JSON.stringify(grupoAcademico);
    const url = `${this.API_URL}GruposAcademicosApi/${grupoAcademico.GrupoAcademicoId}`;
    return this._httpClient.put(url , body, { headers: this.getHeaders() });
  }

  deleteGrupoAcademico(id: number) {
    const url = `${this.API_URL}GruposAcademicosApi/${id}`;
    return this._httpClient.delete(url , { headers: this.getHeaders() });
  }
}
