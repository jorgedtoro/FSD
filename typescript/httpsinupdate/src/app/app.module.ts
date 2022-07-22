//librerias
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

//componentes
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormComponent } from "./components/form/form.component";
import { UserViewComponent } from "./components/user-view/user-view.component";
import { UserCardComponent } from "./components/user-card/user-card.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FormComponent,
    UserViewComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
