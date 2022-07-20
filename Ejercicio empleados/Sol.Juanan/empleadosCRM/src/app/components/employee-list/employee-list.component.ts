import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/interfaces/employee.interface";
import { EmployeesService } from "src/app/services/employees.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  arrEmployees: Employee[] = [];
  constructor(private employeesServices: EmployeesService) {}

  ngOnInit(): void {
    this.arrEmployees = this.employeesServices.getAll();
    //console.log(this.arrEmployees);
  }
}
