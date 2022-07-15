import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  arrClientes: Cliente[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      let categoria = params.url
      this.arrClientes = this.clientesService.getByCategory(categoria);
    })
  }

}
