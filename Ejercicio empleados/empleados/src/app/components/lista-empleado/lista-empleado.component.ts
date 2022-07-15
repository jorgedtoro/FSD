import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css'],
})
export class ListaEmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    //llamo al servicio de empleados para que me los traiga todos
    this.empleados = this.empleadosService.getAll();
  }
}
