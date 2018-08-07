import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-search-me',
  templateUrl: './search-me.component.html',
  styleUrls: ['./search-me.component.css']
})
export class SearchMeComponent implements OnInit {
  searchFocus;
  items = [];
  myItems = ['About','Experience','Contact'];

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  search(item) {
    this.items = [];
    if (item !== "") {
      this.searchFocus = true;
    }
    else {
      this.searchFocus = false;
    }

    return this.items;
  }

  searchButton(item) {
    this.searchFocus = true;
    this.items = [{title:'About Me!'},{title:'Contact'}];
    return this.items;
  }

  openModal(template: TemplateRef<any>, title) {
    this.searchFocus = false;
    this.modalRef = this.modalService.show(template);
  }
}
