import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-modulo',
  templateUrl: './card-modulo.component.html',
  styles: []
})
export class CardModuloComponent implements OnInit {

  @Input() modulo: any = {};
  @Input() tipo: number;
  constructor(private _router: Router) {}

  ngOnInit() {
  }

  buscar(id: number) {
    console.log(id);
    this._router.navigate(['/modulo', id]);
  }

  regresar() {
    this._router.navigate(['modulos']);
  }
}
