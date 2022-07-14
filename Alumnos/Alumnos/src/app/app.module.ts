import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FormComponent } from './components/form/form.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FiltrosComponent,
    FormComponent,
    ListaAlumnosComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
