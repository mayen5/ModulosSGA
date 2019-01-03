import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  autenticado: any;
  constructor(private _router: Router, private _loginService: LoginService) {
    this.autenticado = localStorage.getItem('autenticado');
  }

  ngOnInit() {
  }

  logout() {
    this._loginService.logout();
    localStorage.removeItem('autenticado');
    this._router.navigateByUrl('login');
    location.reload(true);
  }

  buscarModulo(termino: string) {
    console.log(termino);
    this._router.navigate(['/buscador', termino]);
  }
}
