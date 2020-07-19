import { Component, OnInit } from '@angular/core';
import { ModalService } from '../@shared/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  modalClose() {
    this.modalService.close();
  }

}
