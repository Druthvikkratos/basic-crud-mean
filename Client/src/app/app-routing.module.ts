import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListingsComponent } from './components/users-listings/users-listings.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'userslistings', pathMatch: 'full' },
  { path: 'userslistings', component: UsersListingsComponent },
  { path: 'addusers', component: AddUsersComponent },
  { path: 'editusers/:id', component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
