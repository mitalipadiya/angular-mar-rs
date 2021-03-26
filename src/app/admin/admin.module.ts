import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageVerticalsComponent } from './manage-verticals/manage-verticals.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import { TablesComponent } from './core/components/tables/tables.component';
import {ConfirmationDialogComponent} from './core/components/confirmation-dialog/confirmation-dialog.component';
import { VerticalsFormComponent } from './manage-verticals/verticals-form/verticals-form.component';
import { ListFilterPipe } from './core/pipes/list-filter.pipe';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { EditDialogComponent } from './core/components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BoardAdminComponent,
    ManageUsersComponent,
    ManageVerticalsComponent,
    TablesComponent,
    ConfirmationDialogComponent,
    VerticalsFormComponent,
    ListFilterPipe,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
