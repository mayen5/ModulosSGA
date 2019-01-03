import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { Router } from '@angular/router';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styles: []
})
export class CarrerasComponent implements OnInit {

  carreras: any[] = [];
  clase = 'Carrera';
  loading: boolean;

  constructor(private _router: Router, private _carreraService: CarreraService) {
    this.loading = true;
    this._carreraService.getCarreras().subscribe((data: any) => {
      this.carreras = data;
      this.loading = false;
      console.log(this.carreras);
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
    const registro = this.carreras[id];
    this._carreraService.deleteCarrera(registro.CarreraId).subscribe((respuesta: any) => {
      if (!respuesta) {
         console.log('Error');
      } else {
        this.carreras.splice(id, id);
      }
    });
  }

  agregar() {
    this._router.navigate(['/agregar-carrera']);
    location.reload(true);
  }

  actualizar(id: number) {
    this._router.navigate(['/agregar-carrera', id]);
    location.reload();
  }

}
