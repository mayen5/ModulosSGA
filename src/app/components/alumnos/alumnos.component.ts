import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: []
})
export class AlumnosComponent implements OnInit {

  alumnos: any[] = [];
  clase = 'Alumno';
  loading: boolean;

  constructor(private _alumnoService: AlumnoService) {
    this.loading = true;
    this._alumnoService.getAlumnos().subscribe((data: any) => {
      this.alumnos = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  eliminar(tipoClase: string) {
    if (this.clase === tipoClase) {
      console.log('Eliminando...');
    }
  }

  agregar(tipoClase: string) {
    if (this.clase === tipoClase) {
      console.log('Agregando...');
    }
  }

  actualizar(tipoClase: string) {
    if (this.clase === tipoClase) {
      console.log('Actualizando...');
    }
  }

}
