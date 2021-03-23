import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorRoutingModule } from './moderator-routing.module';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';

@NgModule({
  declarations: [BoardModeratorComponent],
  imports: [
    CommonModule,
    ModeratorRoutingModule
  ]
})
export class ModeratorModule { }
