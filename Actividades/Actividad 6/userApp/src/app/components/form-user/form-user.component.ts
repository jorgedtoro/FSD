import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup;
  myUser: User | any;
  dinamicText: string = 'Nuevo';

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userForm = new FormGroup(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        image: new FormControl('', [Validators.required]),
      },
      []
    );
  }

  ngOnInit(): void {
    //diferenciamos entre un registro nuevo y una actualización

    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idUser);

      if (id) {
        this.dinamicText = 'Actualizar';
        const response = await this.usersService.getById(id);

        const user: User = response;

        this.userForm = new FormGroup(
          {
            first_name: new FormControl(user?.first_name, [
              Validators.required,
              Validators.minLength(3),
            ]),
            last_name: new FormControl(user?.last_name, [Validators.required]),
            email: new FormControl(user?.email, [
              Validators.required,
              Validators.email,
            ]),
            image: new FormControl(user?.image, [Validators.required]),
          },
          []
        );
      }
    });
  }

  cancel(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idUser);
      if (id) {
        Swal.fire('El usuario no se ha actualizado');
      } else {
        Swal.fire('El usuario no se ha registrado');
      }
    });
  }

  getDataForm() {
    // TODO update user and create a new user.
  }
}
