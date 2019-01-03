import { Component, OnInit } from '@angular/core';
import { PuestoService } from '../../services/puesto.service';
import { Router } from '@angular/router';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styles: []
})
export class PuestosComponent implements OnInit {

  puestos: any[] = [];
  clase = 'Puesto';
  loading: boolean;

  constructor(private _router: Router, private _puestoService: PuestoService) {
    this.loading = true;
    this._puestoService.getPuestos().subscribe((data: any) => {
      this.puestos = data;
      this.loading = false;
      console.log(this.puestos);
    });
   }
  ngOnInit() {
  }

  ejecutarMetodo(metodo: Metodo) {
    if (this.clase === metodo.clase) {
      if (metodo.metodo === 'add') {
        this.agregar();
      } else if (metodo.metodo === 'delete') {
        this.eliminar(metodo.id);
      } else if (metodo.metodo === 'update') {
        this.actualizar(metodo.id);
      }
    }
  }
  eliminar(id: number) {
    const registro = this.puestos[id];
    this._puestoService.deletePuesto(registro.PuestoId).subscribe((respuesta: any) => {
      if (!respuesta) {
         console.log('Error');
      } else {
        this.puestos.splice(id, id);
      }
    });
  }

  agregar() {
    this._router.navigate(['/agregar-puesto']);
  }

  actualizar(id: number) {
    this._router.navigate(['/agregar-puesto', id]);
  }

}
