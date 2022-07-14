import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos: Alumno[] = [];
  id: number = 4
  constructor() {
    this.arrAlumnos = ALUMNOS
  }

  getAll(): Alumno[] {
    return this.arrAlumnos;
  }

  create(pAlumno: any): string {
    pAlumno.id = this.id;
    this.arrAlumnos.push(pAlumno)
    return 'alumno insertado correctamente'

  }
}
