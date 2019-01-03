import { Component, OnInit } from '@angular/core';
import { SalonService } from '../../services/salon.service';
import { Router } from '@angular/router';
import { Metodo } from '../interfaces/metodo.interface';

@Component({
  selector: 'app-salones',
  templateUrl: './salones.component.html',
  styles: []
})
export class SalonesComponent implements OnInit {

  salones: any[] = [];
  clase = 'Salon';
  loading: boolean;

  constructor(private _router: Router, private _salonService: SalonService) {
    this.loading = true;
    this._salonService.getSalones().subscribe((data: any) => {
      this.salones = data;
      this.loading = false;
      console.log(this.salones);
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
    const registro = this.salones[id];
    this._salonService.deleteSalon(registro.SalonId).subscribe((respuesta: any) => {
      if (!respuesta) {
         console.log('Error');
      } else {
        this.salones.splice(id, id);
      }
    });
  }

  agregar() {
    this._router.navigate(['/agregar-salon']);
  }

  actualizar(id: number) {
    this._router.navigate(['/agregar-salon', id]);
  }

}
