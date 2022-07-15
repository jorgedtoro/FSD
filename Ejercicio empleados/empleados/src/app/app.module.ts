import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Code404Component } from './components/code404/code404.component';
import { FooterComponent } from './components/footer/footer.component';
import { VistaEmpleadoComponent } from './components/vista-empleado/vista-empleado.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';

@NgModule({
  declarations: [AppComponent, EmpleadoComponent, FormEmpleadoComponent, HomeComponent, HeaderComponent, Code404Component, FooterComponent, VistaEmpleadoComponent, ListaEmpleadoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
