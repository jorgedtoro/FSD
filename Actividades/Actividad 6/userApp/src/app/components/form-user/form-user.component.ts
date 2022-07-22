import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup;
  constructor() {
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

  ngOnInit(): void {}

  recogerDatosForm() {
    console.log(this.userForm.value);
  }
}
