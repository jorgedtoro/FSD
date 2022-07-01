import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arrImagenes: any[] = [];
  imagenActual: number = 0;
  constructor() {
    this.arrImagenes = [
      { url: './assets/images/imagen_1.jpg', title: 'Titulo imagen 1' },
      { url: './assets/images/imagen_2.jpg', title: 'Titulo imagen 2' },
      { url: './assets/images/imagen_3.jpg', title: 'Titulo imagen 3' },
      { url: './assets/images/imagen_4.jpg', title: 'Titulo imagen 4' },
    ]
  }

  ngOnInit(): void {
  }

  cambiarImagen($event: any): void {
    //console.log($event.target.innerText)
    if ($event.target.innerText === 'NEXT') {
      //avanzar el carrusel
      this.imagenActual = (this.imagenActual === this.arrImagenes.length - 1) ? 0 : this.imagenActual + 1

    } else {
      //retroceder el carrusel
      this.imagenActual = (this.imagenActual === 0) ? this.arrImagenes.length - 1 : this.imagenActual - 1
    }
  }

}
