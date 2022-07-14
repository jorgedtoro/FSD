import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  arrAlumnos: Alumno[] = [];
  constructor() {
    this.arrAlumnos = ALUMNOS;
  }
}
