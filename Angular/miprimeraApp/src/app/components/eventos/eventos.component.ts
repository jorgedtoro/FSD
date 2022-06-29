import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  frase: string = "No vivo en ninguna ciudad";
  color:string="";
  constructor() { }

  ngOnInit(): void {
  }
  cambiarColor($event: any){
    let color:string = $event.target.value;
    this.color = color;
  };
  seleccionarCiudad($event:any){
    switch ($event.target.value){
      case 'Madrid':
        this.frase = "Vivo en Madrid"
        break;
      case 'Londres':
        this.frase = "Vivo en Londres"
        break;
      case 'NY':
          this.frase = "Vivo en NY"
          break;
      case 'Roma':
            this.frase = "Vivo en Roma"
            break;
      default:
        this.frase = "No vivo en ninguna ciudad"
      
    }
  };
}
