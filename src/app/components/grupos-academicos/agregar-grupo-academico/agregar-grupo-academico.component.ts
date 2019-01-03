import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GrupoAcademico } from './../../interfaces/grupoAcademico.interface';
import { GrupoAcademicoService } from '../../../services/grupo-academico.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-grupo-academico',
  templateUrl: './agregar-grupo-academico.component.html',
  styles: []
})
export class AgregarGrupoAcademicoComponent implements OnInit {

  agregar: boolean = false;
  grupoAcademico: GrupoAcademico = {
    GrupoAcademicoId: 0,
    Descripcion: ''
  };

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private _grupoAcademicoService: GrupoAcademicoService) {
    this._activatedRouter.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._grupoAcademicoService.getGrupoAcademico(params['id']).subscribe((data: GrupoAcademico) => {
          this.grupoAcademico = data;
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
      this._grupoAcademicoService.addGrupoAcademico(this.grupoAcademico).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      this._grupoAcademicoService.updateGrupoAcademico(this.grupoAcademico).subscribe((data: any) => {
        console.log(data);
      });
    }
    this._router.navigate(['/grupos-academicos']);
  }
}
