import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  //Recibir del padre
/*   @Input('nuevo') nuevo: Personaje = { nombre: '', poder: 0 };

  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  enviarAlPadre() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
 */  


  @Input('nuevo') nuevo: Personaje = { nombre: '', poder: 0 };

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }
}
