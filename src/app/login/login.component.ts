import { Component, OnInit } from '@angular/core';
import { ModalService } from '../@shared/modal/modal.service';
import { ModalRef } from '../@shared/modal/modal-ref';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private modalRef: ModalRef,
  ) { }

  ngOnInit() {
  }

  modalClose() {
    this.modalRef.close();
  }

}
