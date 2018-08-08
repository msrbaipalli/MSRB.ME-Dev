import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  modalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }

}
