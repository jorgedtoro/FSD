import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { EMPLOYEES } from '../db/employees.db';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private arrEmployees: Employee[] = []
  constructor() {
    this.arrEmployees = EMPLOYEES
  }

  getAll(): Employee[] {
    return this.arrEmployees;
  }

  getById(pId: number): Employee | undefined {
    return this.arrEmployees.find(employee => employee.id === pId);
  }
}
