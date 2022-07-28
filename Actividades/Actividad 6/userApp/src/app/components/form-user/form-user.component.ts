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
  
  constructor
    (
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
        mail: new FormControl('', [Validators.required, Validators.email]),
        image: new FormControl('', [Validators.required]),
      },
      []
    );
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(async(params: any) => { 
    //   console.log(params.idUser);
    // });
    
  }

  async getDataForm(): Promise<void> {
    // let newUser = this.userForm.value;
    // let response = await this.usersService.create(newUser)
  }
}
