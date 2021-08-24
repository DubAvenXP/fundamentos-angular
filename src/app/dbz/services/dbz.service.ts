import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
	private _personajes: Personaje[] = [
		{ nombre: 'Goku', poder: 20000 },
		{ nombre: 'Vegeta', poder: 10000 },
		{ nombre: 'Piccolo', poder: 2500 },
		{ nombre: 'Bulma', poder: 100 },
		{ nombre: 'Krillin', poder: 900 },
		{ nombre: 'Trunks', poder: 5500 },
    ];

	get personajes(): Personaje[] {
		return [...this._personajes];
	}

	constructor() {
	}

	agregarPersonaje(personaje: Personaje): void {
		this._personajes.push(personaje);
	}
}
