import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulosService } from '../../services/modulos.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styles: []
})
export class ModuloComponent implements OnInit {

  modulos: any[] = [];
  constructor(private _activatedRoute: ActivatedRoute, private _modulosService: ModulosService) {
      this._activatedRoute.params.subscribe(params => {
        this.modulos.push(this._modulosService.getModulo(params['id']));
      });
   }

  ngOnInit() {
  }

}
