import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEmptyString, isNullOrUndefined } from 'src/app/shared/utils/utils.service';
import { IPlayer } from '../play-cards-counter.interfaces';

@Component({
  selector: 'app-edit-player-dialog',
  templateUrl: './edit-player-dialog.component.html',
  styleUrls: ['./edit-player-dialog.component.scss']
})
export class EditPlayerDialogComponent implements OnInit {
  playerName: string;
  players: IPlayer[];

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.playerName = this.data.player.name;
    this.players = this.data.players;
  }

  onSubmit(): void {
    this.data.player.name = this.playerName;
  }

  isSubmitDisabled(): boolean {
    return isNullOrUndefined(this.playerName) ||
      isEmptyString(this.playerName) ||
      !!(this.players && this.players.find(player => player.name.toLowerCase() === this.playerName.toLowerCase()))
  }

}
