import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from './../../interfaces/curso.interface';
import { CursoService } from '../../../services/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styles: []
})
export class AgregarCursoComponent implements OnInit {

  agregar: boolean = false;
  curso: Curso = {
    CursoId: 0,
    Descripcion: ''
  };

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private _cursoService: CursoService) {
    this._activatedRouter.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._cursoService.getCurso(params['id']).subscribe((data: Curso) => {
          this.curso = data;
        });
      } else {
        this.agregar = true;
      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log('Guardar...');
    if ( this.agregar) {
      this._cursoService.addCurso(this.curso).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      this._cursoService.updateCurso(this.curso).subscribe((data: any) => {
        console.log(data);
      });
    }
    this._router.navigate(['/cursos']);
  }
}
