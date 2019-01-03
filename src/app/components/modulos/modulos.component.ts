import { Component, OnInit } from '@angular/core';
import { ModulosService, Modulo } from '../../services/modulos.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styles: []
})
export class ModulosComponent implements OnInit {

  modulos: Modulo[];
  constructor(private _moduloService: ModulosService) {
    this.modulos = this._moduloService.getModulos();
   }

  ngOnInit() {
  }

}
