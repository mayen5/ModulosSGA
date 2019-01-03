import { Component, OnInit } from '@angular/core';
import { ProfesorCursoService } from '../../services/profesor-curso.service';

@Component({
  selector: 'app-profesores-cursos',
  templateUrl: './profesores-cursos.component.html',
  styles: []
})
export class ProfesoresCursosComponent implements OnInit {

  profesoresCursos: any[] = [];
  clase = 'ProfesorCurso';
  loading: boolean;

  constructor(private _profesorCursoService: ProfesorCursoService) {
    this.loading = true;
    this._profesorCursoService.getProfesoresCursos().subscribe((data: any) => {
      this.profesoresCursos = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
