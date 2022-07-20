import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/interfaces/department.interface';
import { Employee } from 'src/app/interfaces/employee.interface';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() myEmployee!: Employee;
  myDepartment!: Department;
  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit(): void {
    let response = this.departmentsService.getById(this.myEmployee.department)
    if (response !== undefined) {
      this.myDepartment = response;
    }
  }

  changeStatus() {
    this.myEmployee.status = !this.myEmployee.status;
  }

}
