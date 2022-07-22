import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Code404Component } from './components/code404/code404.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ListUsersComponent },
  { path: 'user', component: ViewUserComponent },
  { path: 'actualizar', component: FormUserComponent },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
