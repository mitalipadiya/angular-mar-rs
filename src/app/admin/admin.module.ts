import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageVerticalsComponent } from './manage-verticals/manage-verticals.component';

@NgModule({
  declarations: [BoardAdminComponent, ManageUsersComponent, ManageVerticalsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
