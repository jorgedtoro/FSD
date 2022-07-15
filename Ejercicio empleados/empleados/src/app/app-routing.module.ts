import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Code404Component } from './components/code404/code404.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  { path: 'empleados', component: ListaEmpleadoComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
