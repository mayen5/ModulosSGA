import { Component, OnInit } from '@angular/core';
import { ClaseAlumnoService } from '../../services/clase-alumno.service';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-clases-alumnos',
  templateUrl: './clases-alumnos.component.html',
  styles: []
})
export class ClasesAlumnosComponent implements OnInit {

  clasesAlumnos: any[] = [];
  clase = 'ClaseAlumno';
  loading: boolean;

  constructor(private _claseAlumnoService: ClaseAlumnoService) {
    this.loading = true;
    this._claseAlumnoService.getClasesAlumnos().subscribe((data: any) => {
      this.clasesAlumnos = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
