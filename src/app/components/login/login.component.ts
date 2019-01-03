import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    usuarioId: 0,
    nombre: '',
    login: '',
    password: '',
    email: '',
    rol: {
      rolId: 0,
      descripcion: ''
    }
  };

  estado: string;
  constructor( private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this._loginService.login(this.usuario).pipe(first()).subscribe(data => {
      if (data) {
        const autenticado = true;
        localStorage.setItem('autenticado', JSON.stringify(autenticado));
        location.reload(true);
        this._router.navigateByUrl('home');
      } else {
        this.estado = 'El usuario o password son incorrectos, verifique sus credenciales.';
      }
    });
  }

}
