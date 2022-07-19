import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormUserComponent } from './components/form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewUserComponent,
    ListUsersComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
