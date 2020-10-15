import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  showLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => { this.showLoading = false; }, 1500)
  }

}
