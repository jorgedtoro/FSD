import { Injectable } from '@angular/core';
import { DEPARTMENTS } from '../db/departments.db';
import { Department } from '../interfaces/department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private arrDepartments: Department[] = []
  constructor() {
    this.arrDepartments = DEPARTMENTS;
  }

  getAll() {
    return this.arrDepartments;
  }

  getById(pId: number): Department | undefined {
    return this.arrDepartments.find(department => department.id === pId)
  }
}
