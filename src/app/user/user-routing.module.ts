import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardUserComponent} from './board-user/board-user.component';
import {AuthGuard} from '../core/auth/guards/auth.guard';
import {ModeratorGuard} from '../core/auth/guards/moderator.guard';
import {AdminGuard} from '../core/auth/guards/admin.guard';

const routes: Routes = [
  {
    path: 'user',
    component: BoardUserComponent,
    canActivate: [AuthGuard, ModeratorGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
