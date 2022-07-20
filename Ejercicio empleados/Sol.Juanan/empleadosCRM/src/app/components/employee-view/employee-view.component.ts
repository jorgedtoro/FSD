import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/interfaces/department.interface';
import { Employee } from 'src/app/interfaces/employee.interface';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  myEmployee!: Employee;
  myDepartment!: Department;
  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idemployee);
      let response = this.employeesService.getById(id)
      if (response !== undefined) {
        this.myEmployee = response;
        let response2 = this.departmentsService.getById(this.myEmployee.department)
        if (response2 !== undefined)
          this.myDepartment = response2;
      }
    })

  }

  changeStatus() {
    this.myEmployee.status = !this.myEmployee.status;
  }

}
