import { Component, OnInit } from '@angular/core';
import { GrupoAcademicoService } from '../../services/grupo-academico.service';
import { Router } from '@angular/router';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-grupos-academicos',
  templateUrl: './grupos-academicos.component.html',
  styles: []
})
export class GruposAcademicosComponent implements OnInit {

  gruposAcademicos: any[] = [];
  clase = 'GrupoAcademico';
  loading: boolean;

  constructor(private _router: Router, private _grupoAcademicoService: GrupoAcademicoService) {
    this.loading = true;
    this._grupoAcademicoService.getGruposAcademicos().subscribe((data: any) => {
      this.gruposAcademicos = data;
      this.loading = false;
      console.log(this.gruposAcademicos);
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
    const registro = this.gruposAcademicos[id];
    this._grupoAcademicoService.deleteGrupoAcademico(registro.GrupoAcademicoId).subscribe((respuesta: any) => {
      if (!respuesta) {
         console.log('Error');
      } else {
        this.gruposAcademicos.splice(id, id);
      }
    });
  }

  agregar() {
    this._router.navigate(['/agregar-grupo-academico']);
  }

  actualizar(id: number) {
    this._router.navigate(['/agregar-grupo-academico', id]);
  }

}
