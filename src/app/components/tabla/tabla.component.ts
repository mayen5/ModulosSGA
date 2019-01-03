import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Metodo } from '../interfaces/metodo.interface';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {

  // Inicializar objeto tipo metodo
  metodo: Metodo = {id: 0, clase: '', metodo: ''};

  // Objetos de entrada al componente
  @Input() items: any[] = [];
  @Input() clase: string;

  // Objeto de salida del componente
  @Output() tipoMetodo: EventEmitter<Metodo>;


  constructor() {
    // Inicializar el emitter
    this.tipoMetodo = new EventEmitter();
   }

  ngOnInit() {
  }

  emitirMetodo() {
    this.metodo.clase = this.clase;
    this.tipoMetodo.emit(this.metodo);
  }
  delete(id: number) {
    this.metodo.id = id;
    this.metodo.metodo = 'delete';
    this.emitirMetodo();
  }

  add() {
    this.metodo.metodo = 'add';
    this.emitirMetodo();
  }

  update(id: number) {
    this.metodo.id = id;
    this.metodo.metodo = 'update';
    this.emitirMetodo();
  }
}
