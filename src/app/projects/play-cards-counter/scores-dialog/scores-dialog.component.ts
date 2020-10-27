import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from '../play-cards-counter.interfaces';

@Component({
  selector: 'app-scores-dialog',
  templateUrl: './scores-dialog.component.html',
  styleUrls: ['./scores-dialog.component.scss']
})
export class ScoresDialogComponent implements OnInit {
  player: IPlayer;

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.player = this.data.player;
  }

}
