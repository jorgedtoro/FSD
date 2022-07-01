import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  frase: string = "No vivo en ninguna ciudad";
  color: string = "";
  nombre: string = "Lucia";
  apellido: string = "";
  nombreCompleto: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  cargarNombre() {
    this.nombreCompleto = `${this.nombre} ${this.apellido}`
  }

  cambiarColor($event: any) {
    let color: string = $event.target.value;
    this.color = color;
  }

  seleccionarCiudad($event: any) {
    switch ($event.target.value) {
      case 'madrid':
        this.frase = "Vivo en Madrid"
        break;

      case 'londres':
        this.frase = "Vivo en Londres"
        break;

      case 'nueva york':
        this.frase = "Vivo en Nueva York"
        break;

      case 'roma':
        this.frase = "Vivo en Roma"
        break;

      default:
        this.frase = 'No vivo en ninguna ciudad'
        break;

    }
  }

}
