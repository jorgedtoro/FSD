import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  // clase:string="";
  activo:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  cambiaEstado(){
    this.activo = !this.activo;

    
  }
}
