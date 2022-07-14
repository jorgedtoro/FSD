import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newAlumno: any;

  constructor(private alumnosServices: AlumnosService) {
    this.newAlumno = {
      nombre: "",
      email: "",
      edad: 0,
      curso: ""
    }
  }

  ngOnInit(): void {
  }

  recogerDatos(): void {
    let response = this.alumnosServices.create(this.newAlumno)
    alert(response);
  }

}
