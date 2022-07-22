import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "agenda" },
  { path: "agenda", component: UserListComponent },
  { path: "contacto/:idcontact", component: UserViewComponent },
  { path: "nuevo", component: FormComponent },
  { path: 'actualizar/:idcontact', component: FormComponent },
  { path: "**", redirectTo: 'agenda' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
