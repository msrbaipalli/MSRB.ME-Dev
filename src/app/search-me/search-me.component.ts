import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { isEmptyString, isNullOrUndefined } from '../shared/utils/utils.service';
import { SEARCH_ITEMS } from './search-me.constants';

@Component({
  selector: 'app-search-me',
  templateUrl: './search-me.component.html',
  styleUrls: ['./search-me.component.scss']
})
export class SearchMeComponent implements OnInit {
  isSearchItemFound: boolean;
  searchValue: string;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this._reset();
    this.searchValue = "about";
  }

  hasSearchMatch(key: string): boolean {
    const items = key && SEARCH_ITEMS[key];
    const searchValue = this.searchValue ? this.searchValue.trim().toLowerCase() : '';

    if (isNullOrUndefined(items) || isEmptyString(searchValue)) {
      return false;
    }

    return items.some((item: string) =>
      item.toLowerCase().includes(searchValue)
    );
  }

  hasResults(): boolean {
    return Object.keys(SEARCH_ITEMS).some(key => this.hasSearchMatch(key));
  }

  hasSearchValue(): boolean {
    return this.searchValue !== '';
  }

  openModal(template: any): void {
    this._reset();
    this.modalRef = this.modalService.show(template);
  }

  onSearchFocusout(): void { }

  onSearchClear(): void {
    this._reset();
  }

  private _reset(): void {
    this.searchValue = '';
    this.isSearchItemFound = false;
  }
}
