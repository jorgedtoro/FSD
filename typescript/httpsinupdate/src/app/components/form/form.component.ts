import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      email: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      avatar: new FormControl('', []),
    }, [])
  }

  async getDataForm(): Promise<void> {
    let newUser = this.userForm.value;
    let response = await this.usersServices.create(newUser)
    if (response.id) {
      this.router.navigate(['/agenda'])
    } else {
      alert('Hubo un error intentelo de nuevo')
    }
  }

  ngOnInit(): void {
  }

}
