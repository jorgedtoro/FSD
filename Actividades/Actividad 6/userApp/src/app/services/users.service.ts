import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { USUARIOS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //PROPIEDADES
  private arrUsers: User[] = []; //creamos un array de usuarios de tipo Usuario, de tipo private.
  urlAPI: string = 'https://peticiones.online/api/users'; //URL de la API base

  //CONSTRUCTOR
  constructor(private httpClient: HttpClient) {
    //llenamos el array con los datos del array USUARIOS //tengo que llamar a la rest API
    this.arrUsers = USUARIOS;
  }

  //MÉTODOS

  //método para recuperar usuarios
  getAll(): Promise<any> {
    //return this.arrUsers;
    return lastValueFrom(this.httpClient.get<any>(this.urlAPI));
  }
  //método que devuelve un usuario de tipo User en base a su id
  getById(pId: number): Promise<any> {
    //return this.arrUsers.find((user) => user.id === pId);
    return lastValueFrom(this.httpClient.get<any>(`${this.urlAPI}/${pId}`));
  }
  delete(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.urlAPI}/${pId}`));
  }
}
