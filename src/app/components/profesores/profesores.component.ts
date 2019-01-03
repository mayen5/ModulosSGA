import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styles: []
})
export class ProfesoresComponent implements OnInit {

  profesores: any[] = [];
  clase = 'Profesor';
  loading: boolean;

  constructor(private _profesorService: ProfesorService) {
    this.loading = true;
    this._profesorService.getProfesores().subscribe((data: any) => {
      this.profesores = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
