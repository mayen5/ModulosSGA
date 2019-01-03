import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salon } from './../../interfaces/salon.interface';
import { SalonService } from '../../../services/salon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-salon',
  templateUrl: './agregar-salon.component.html',
  styles: []
})
export class AgregarSalonComponent implements OnInit {

  agregar: boolean = false;
  salon: Salon = {
    SalonId: 0,
    Descripcion: ''
  };

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private _salonService: SalonService) {
    this._activatedRouter.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._salonService.getSalon(params['id']).subscribe((data: Salon) => {
          this.salon = data;
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
      this._salonService.addSalon(this.salon).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      this._salonService.updateSalon(this.salon).subscribe((data: any) => {
        console.log(data);
      });
    }
    this._router.navigate(['/salones']);
  }
}
