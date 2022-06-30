import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string = ""
  edad: number = 40;
  color: string = 'verde'
  constructor() {
    this.nombre = "Juan Antonio"
  }

  ngOnInit(): void {
  }

}
