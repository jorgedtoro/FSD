import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getDataForm(pForm: any): void {
    let newEmployee: Employee = pForm.value;
    console.log(newEmployee)
  }

}
