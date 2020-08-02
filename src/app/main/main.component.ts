import { Component, OnInit } from '@angular/core';
import { ModalService } from '../@shared/modal/modal.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit() {
  }

  showModal() {
    const ref = this.modalService.open(LoginComponent);
    const closeEvent = ref.afterClosed.subscribe((data) => {
      console.log(data);
      closeEvent.unsubscribe();
    })
  }

  hideModal() {
    
    // this.modalRef.close();
  }

}
