import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulosService, Modulo } from '../../services/modulos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  modulos: Modulo[] = [];
  termino: string;
  constructor(private _activatedRoute: ActivatedRoute, private _modulosService: ModulosService) {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.modulos = this._modulosService.buscar(this.termino);
    });
   }

  ngOnInit() {
  }

}
