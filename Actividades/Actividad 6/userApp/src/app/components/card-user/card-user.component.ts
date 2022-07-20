import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent implements OnInit {
  @Input() myUser!: User;
  // inyectamos el servicio Users.
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    console.log(this.myUser.email);
  }
}
