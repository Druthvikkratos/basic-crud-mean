import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListingsComponent } from './components/users-listings/users-listings.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersListingsComponent,
    AddUsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
