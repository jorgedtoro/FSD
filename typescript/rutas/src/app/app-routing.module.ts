import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { ClientesComponent } from './components/vista-producto/clientes/clientes.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'trabajos', component: TrabajosComponent },
  {
    path: 'trabajo/:url', component: VistaProductoComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'clientes' },
      { path: 'opiniones', component: OpinionesComponent },
      { path: 'clientes', component: ClientesComponent }
    ]
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
