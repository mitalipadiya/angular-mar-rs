import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../core/auth/guards/auth.guard';
import {ModeratorGuard} from '../core/auth/guards/moderator.guard';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';

const routes: Routes = [
  {
    path: 'mod',
    component: BoardModeratorComponent,
    canActivate: [AuthGuard, ModeratorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule { }
