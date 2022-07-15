import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './components/page404/page404.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';
import { ClientesComponent } from './components/vista-producto/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    HeaderComponent,
    Page404Component,
    TrabajosComponent,
    VistaProductoComponent,
    OpinionesComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
