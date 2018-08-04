import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-me',
  templateUrl: './search-me.component.html',
  styleUrls: ['./search-me.component.css']
})
export class SearchMeComponent implements OnInit {
  searchFocus;
  items = [];
  myItems = ['About','Experience','Contact'];

  constructor() { }

  ngOnInit() {
  }

  search(item) {
    if (item.trim() !== "") {
      this.searchFocus = true;
    }
    else {
      this.searchFocus = false;
    }

    return this.items;
  }
}
