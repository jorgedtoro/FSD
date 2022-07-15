import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/interfaces/trabajo.interface';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos: Trabajo[] = []

  constructor(private trabajosService: TrabajosService) { }

  ngOnInit(): void {
    //voy a llamar al servicio para que me traiga un listado de trabajos y pintarlos
    this.trabajos = this.trabajosService.getAll();
  }

}
