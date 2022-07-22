import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  arrUsers: User[] = [];
  //inyectamos el servicio en el constructor de la clase.
  constructor(private usersService: UsersService) {}

  async ngOnInit(): Promise<void> {
    //hago una petición al servicio de los usuarios de la API.
    //se gestiona la respuesta que es una promesa.
    let response = await this.usersService.getAll();
    this.arrUsers = response.data;
  }
}
