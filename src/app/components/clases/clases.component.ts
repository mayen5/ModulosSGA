import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../../services/clase.service';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  clases: any[] = [];
  clase = 'Clase';
  loading: boolean;

  constructor(private _claseService: ClaseService) {
    this.loading = true;
    this._claseService.getClases().subscribe((data: any) => {
      this.clases = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
