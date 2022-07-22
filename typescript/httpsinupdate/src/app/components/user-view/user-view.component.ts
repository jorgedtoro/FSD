import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/interfaces/user.interface";
import { UsersService } from "src/app/services/users.service";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.css"],
})
export class UserViewComponent implements OnInit {
  myUser: User | any;
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //tengo que capturar la ruta activa
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idcontact);
      let response = await this.usersService.getById(id);
      this.myUser = response.data;
    });
  }
}
