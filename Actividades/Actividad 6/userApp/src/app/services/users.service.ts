import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { USUARIOS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private arrUsers: User[] = []; //creamos un array de usuarios de tipo Usuario, de tipo private.

  constructor(private httpClient: HttpClient) {
    //llenamos el array con los datos del array USUARIOS //tengo que llamar a la rest API
    this.arrUsers = USUARIOS;
  }

  //método para recuperar usuarios
  getAll(): User[] {
    return this.arrUsers;
    //return LastValueFrom(this.httpClient.get<any>(this.baseUrl)) para las promesas.
  }
}
