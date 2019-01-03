import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from './../components/interfaces/curso.interface';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  API_URL = environment.apiEndPoint;
  TOKEN = environment.token;
  constructor(private _httpClient: HttpClient) {
    console.log('Servicio de cursos iniciado');
  }

  getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    const headers = new HttpHeaders({'Authorization' : `Bearer ${ this.TOKEN }`});
    return this._httpClient.get(url , { headers });
   }

   getCursos() {
    return this.getQuery('CursosApi');
  }

  getCurso(id: number) {
    return this.getQuery(`CursosApi/${id}`);
  }

  getHeaders() {
    const headers = new HttpHeaders()
    .set('Content-type', 'application/json')
    .set('Authorization', `Bearer ${ this.TOKEN }`);
    return headers;
  }

  addCurso(curso: Curso) {
    const body = JSON.stringify(curso);
    console.log(body);
    const url = `${this.API_URL}CursosApi`;
    console.log(url);
    return this._httpClient.post(url , body, { headers: this.getHeaders() });
  }

  updateCurso(curso: Curso) {
    const body = JSON.stringify(curso);
    const url = `${this.API_URL}CursosApi/${curso.CursoId}`;
    return this._httpClient.put(url , body, { headers: this.getHeaders() });
  }

  deleteCurso(id: number) {
    const url = `${this.API_URL}CursosApi/${id}`;
    return this._httpClient.delete(url , { headers: this.getHeaders() });
  }
}
