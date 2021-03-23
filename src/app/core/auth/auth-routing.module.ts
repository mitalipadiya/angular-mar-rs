import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AdminRoutingModule} from '../../admin/admin-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  AdminRoutingModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
