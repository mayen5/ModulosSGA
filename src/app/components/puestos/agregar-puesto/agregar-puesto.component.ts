import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Puesto } from './../../interfaces/puesto.interface';
import { PuestoService } from '../../../services/puesto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-puesto',
  templateUrl: './agregar-puesto.component.html',
  styles: []
})
export class AgregarPuestoComponent implements OnInit {

  agregar: boolean = false;
  puesto: Puesto = {
    PuestoId: 0,
    Descripcion: ''
  };

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private _puestoService: PuestoService) { 
    this._activatedRouter.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._puestoService.getPuesto(params['id']).subscribe((data: Puesto) => {
          this.puesto = data;
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
      this._puestoService.addPuesto(this.puesto).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      this._puestoService.updatePuesto(this.puesto).subscribe((data: any) => {
        console.log(data);
      });
    }
    this._router.navigate(['/puestos']);
  }
}
