import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalService} from './modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent]
})
export class CustomModalModule {
  // tslint:disable-next-line:typedef
  static forRoot() {
    return {
      ngModule: CustomModalModule,
      providers: [ModalService]
    };
  }
}
