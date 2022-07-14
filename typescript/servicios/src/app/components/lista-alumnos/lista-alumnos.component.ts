import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: Alumno[] = [];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAll()
  }

  filtrarPorCurso($event: string) {
    console.log($event);
    //teneis que intetar filtrar jugando con el servicio y arrAlumnos , la propiedad alumnos de este componente.
    //funciones ciclo de vida, arrays, servicio.
  }

}
