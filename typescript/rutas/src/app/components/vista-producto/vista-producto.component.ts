import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trabajo } from 'src/app/interfaces/trabajo.interface';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  trabajo: Trabajo | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private trabajosService: TrabajosService
  ) { }

  ngOnInit(): void {
    //observable tiene un metodo subscribe que avisa de cualquier cambio en los parametros de ruta
    this.activatedRoute.params.subscribe((params: any) => {
      let url = params.url
      this.trabajo = this.trabajosService.getByUrl(url);
      console.log(this.trabajo);
    })
  }

}
