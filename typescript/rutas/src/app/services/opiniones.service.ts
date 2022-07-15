import { Injectable } from '@angular/core';
import { OPINIONES } from '../db/opiniones.db';
import { Opinion } from '../interfaces/opinion.interface';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  arrOpiniones: Opinion[]
  constructor() {
    this.arrOpiniones = OPINIONES
  }

  getByCategory(pCategoria: string): Opinion[] {
    return this.arrOpiniones.filter(opinion => opinion.categoria === pCategoria);
  }
}
