import { Injectable } from '@angular/core';
import { CLIENTES } from '../db/clientes.db';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private arrClientes: Cliente[] = []
  constructor() {
    this.arrClientes = CLIENTES
  }

  getByCategory(pCategoria: string): Cliente[] {
    return this.arrClientes.filter(cliente => cliente.categoria === pCategoria)
  }
}
