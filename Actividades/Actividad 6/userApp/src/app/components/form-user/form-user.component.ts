import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

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

        const user: User = response.data;

        this.userForm = new FormGroup(
          {
            first_name: new FormControl(user?.first_name, []),
            last_name: new FormControl(user?.last_name, []),
            email: new FormControl(user?.email, [
              Validators.required,
              Validators.email,
            ]),
            image: new FormControl(user?.image, []),
          },
          []
        );
      }
    });
  }

  async getDataForm(): Promise<void> {
    // let newUser = this.userForm.value;
    // let response = await this.usersService.create(newUser);
    // console.log(response);
  }
}
