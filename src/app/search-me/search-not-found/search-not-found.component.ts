import { Component, Input, OnInit } from '@angular/core';
import { SearchMeComponent } from '../search-me.component';
import { SEARCH_HITNS } from '../search-me.constants';

@Component({
  selector: 'search-not-found',
  templateUrl: './search-not-found.component.html',
  styleUrls: ['./search-not-found.component.css']
})
export class SearchNotFoundComponent implements OnInit {
  @Input() searchMeComponent: SearchMeComponent

  searchHints = SEARCH_HITNS;

  constructor() { }

  ngOnInit(): void {
  }

  onHintClick(hint: string): void {
    this.searchMeComponent.searchValue = hint;
  }
}
