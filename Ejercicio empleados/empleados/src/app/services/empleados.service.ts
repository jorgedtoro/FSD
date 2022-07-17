import { Injectable } from '@angular/core';
import { EMPLEADOS } from '../db/empleados.db';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private arrEmpleados: Empleado[] = [];

  constructor() {
    this.arrEmpleados = EMPLEADOS;
  }
  getAll(): Empleado[] {
    return this.arrEmpleados;
  }
  getEmpleado(id:number): Empleado | any {
    return this.arrEmpleados.find(empleado => empleado.id === id)
    
  }
}
