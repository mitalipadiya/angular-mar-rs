import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ManageVerticalsComponent} from './manage-verticals/manage-verticals.component';
import {AdminGuard} from '../core/auth/guards/admin.guard';
import {AuthGuard} from '../core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: BoardAdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard, AdminGuard],
        children: [
          { path: 'users', component: ManageUsersComponent },
          { path: 'verticals', component: ManageVerticalsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
