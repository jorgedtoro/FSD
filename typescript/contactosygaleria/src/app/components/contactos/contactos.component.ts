import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  arrContactos: Contacto[] = []
  resultado: string = "";
  name: string = "";
  phone: number = 0;
  id: number = 3;
  constructor() {
    this.arrContactos = [
      { id: 1, name: 'Juan Antonio', phone: 234567 },
      { id: 2, name: 'Lucia', phone: 978698 },
    ]
  }

  //ngOnInit es un funcion de ciclo de vida que se ejecuta siempre, cuando clases esta disponible, template esta disponible, etiqueta o selector tb esta cargado
  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos(): void {
    this.resultado = "";
    this.arrContactos.forEach(contacto => this.resultado += `<li>${contacto.name} : ${contacto.phone}</li>`)

  }

  guardarDatos() {
    if (this.name !== "" && this.phone !== 0) {
      let posicion = this.arrContactos.findIndex(contacto => contacto.phone === this.phone)

      if (posicion === -1) {
        let newContacto: Contacto = {
          id: this.id,
          name: this.name,
          phone: this.phone
        }
        this.arrContactos.push(newContacto);
        this.id++;
        this.cargarDatos()
        this.name = ""
        this.phone = 0;
      }
      else {
        alert('Usuario duplicado')
      }
    } else {
      alert('los campos no pueden estar vacios')
    }


  }

}
