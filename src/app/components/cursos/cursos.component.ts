import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Router } from '@angular/router';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: []
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];
  clase = 'Curso';
  loading: boolean;

  constructor(private _router: Router, private _cursoService: CursoService) {
    this.loading = true;
    this._cursoService.getCursos().subscribe((data: any) => {
      this.cursos = data;
      this.loading = false;
      console.log(this.cursos);
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
    const registro = this.cursos[id];
    this._cursoService.deleteCurso(registro.CursoId).subscribe((respuesta: any) => {
      if (!respuesta) {
         console.log('Error');
      } else {
        this.cursos.splice(id, id);
      }
    });
  }

  agregar() {
    this._router.navigate(['/agregar-curso']);
  }

  actualizar(id: number) {
    this._router.navigate(['/agregar-curso', id]);
  }

}
