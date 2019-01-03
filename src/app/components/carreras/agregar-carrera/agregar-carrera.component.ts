import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carrera } from './../../interfaces/carrera.interface';
import { CarreraService } from '../../../services/carrera.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-carrera',
  templateUrl: './agregar-carrera.component.html',
  styles: []
})
export class AgregarCarreraComponent implements OnInit {

  agregar = false;
  carrera: Carrera = {
    CarreraId: 0,
    Descripcion: ''
  };

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private _carreraService: CarreraService) {
    this._activatedRouter.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._carreraService.getCarrera(params['id']).subscribe((data: Carrera) => {
          this.carrera = data;
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
      this._carreraService.addCarrera(this.carrera).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      this._carreraService.updateCarrera(this.carrera).subscribe((data: any) => {
        console.log(data);
      });
    }
    this._router.navigate(['/carreras']);
  }
}
