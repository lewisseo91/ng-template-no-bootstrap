import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { LoginComponent } from 'src/app/login/login.component';
import { InsertionDirective } from './insertion.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    InsertionDirective,
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ModalModule { }
