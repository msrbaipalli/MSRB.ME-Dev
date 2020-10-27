import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isFunction } from '../utils/utils.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  onConfirmClick(): void {
    if (!isFunction(this.data.confirmCallback)) {
      return;
    }

    this.data.confirmCallback();
  }
}
