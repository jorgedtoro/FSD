import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() cursoEmitido: EventEmitter<string>;
  constructor() {
    this.cursoEmitido = new EventEmitter();
  }

  ngOnInit(): void {
  }

  recogerCurso($event: any) {
    let curso: string = $event.target.value;
    this.cursoEmitido.emit(curso)
  }

}
