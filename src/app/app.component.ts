import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { ModalService } from './@shared/modal/modal.service';

import {LoginComponent} from './login/login.component';
import { ModalRef } from './@shared/modal/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-template-dh-v9';
  constructor(
    private modalService: ModalService,
    // private modalRef: ModalRef,
  ) {
    // const modalOpen = Observable.create();
    // modalOpen.fromEvent(this.modalEl, 'click');
  }
  
}
