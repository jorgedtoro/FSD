import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //para usar las peticiones http.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewUserComponent,
    ListUsersComponent,
    FormUserComponent,
    CardUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
