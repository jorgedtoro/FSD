import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private usersServices: UsersService) {
    this.registerForm = new FormGroup({
      name: new FormControl("", []),
      surname: new FormControl("", []),
      username: new FormControl("", []),
      password: new FormControl("", []),
      mail: new FormControl("", []),
      address: new FormControl("", []),
      age: new FormControl("", []),
    }, [])
  }

  ngOnInit(): void {
  }

  async getDataForm() {
    try {
      const response = await this.usersServices.register(this.registerForm.value)
      console.log(response);
    } catch (err) {
      console.log(err);
    }

  }

}
