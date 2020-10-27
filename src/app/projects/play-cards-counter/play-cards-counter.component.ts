import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { isEmptyString, isNullOrUndefined } from 'src/app/shared/utils/utils.service';
import { IPlayer } from './play-cards-counter.interfaces';
import { ScoresDialogComponent } from './scores-dialog/scores-dialog.component';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-play-cards-counter',
  templateUrl: './play-cards-counter.component.html',
  styleUrls: ['./play-cards-counter.component.scss']
})
export class PlayCardsCounterComponent implements OnInit {
  playerName: string = '';
  players: IPlayer[] = [];
  scoreInputs = {};
  totalHeaderArrowDown = true;

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
    this.players = [
      {
        name: 'Chandu',
        scores: [23, 4, 0, 24]
      },
      {
        name: 'Madhu',
        scores: [5, 0, 40, 50]
      }
    ];

    this._sortPlayers();
  }

  addPlayer(): void {
    if (isNullOrUndefined(this.playerName) || isEmptyString(this.playerName) || this._playerExists()) {
      return;
    }

    this.players.push({
      name: this.playerName,
      scores: []
    });

    this.playerName = '';
    this.resetScores();
  }

  addScore(): void {
    if (this._areScoresZeroOrNotDefined() || !this._arePlayersAndScoresEqual()) {
      return;
    }

    Object.keys(this.scoreInputs).forEach(playerName => {
      const playerDetails = this.players.find(item => item.name === playerName);
      const playerScore = this.scoreInputs[playerName];

      if (!playerDetails || isNullOrUndefined(playerScore)) {
        return;
      }

      playerDetails.scores.push(playerScore);
      this.scoreInputs[playerName] = 0;
    });

    this._sortPlayers();
  }

  hasScores(player: IPlayer): boolean {
    return player.scores.length > 0;
  }

  getPlayerTotalScore(player: IPlayer): number | string {
    const total = this._getTotalCount(player);
    return isNullOrUndefined(this._getTotalCount(player)) ? '-' : total;
  }

  isRankOnePlayer(player: IPlayer, rank: number): boolean {
    return Object.keys(this.players).length > 2 && player.scores.length > 0 && rank === 0;
  }

  onTotalHeaderClick(): void {
    this.totalHeaderArrowDown = !this.totalHeaderArrowDown;
    this._sortPlayers(this.totalHeaderArrowDown);
  }

  openScoresDialog(player: IPlayer): void {
    this._dialog.open(ScoresDialogComponent, {
      data: {
        player: player,
        totalScore: this._getTotalCount(player)
      }
    });
  }

  resetScores(): void {
    this.players.forEach(player => {
      player.scores = [];
    });
  }

  resetPlayers(): void {
    this.players = [];
  }

  removePlayer({ name }: IPlayer): void {
    this.players = this.players.filter(player => player.name !== name);
    this.scoreInputs = Object.keys(this.scoreInputs).reduce((result, player) => {
      if (player === name) {
        return result;
      }

      result[player] = this.scoreInputs[player];
      return result;
    }, {});

    // Sort it
    this._sortPlayers(this.totalHeaderArrowDown);
  }

  private _areScoresZeroOrNotDefined(): boolean {
    return Object.values(this.scoreInputs).every(value => isNullOrUndefined(value) || value === 0);
  }

  private _playerExists(): boolean {
    return !!(this.players.find(item => item.name.toLowerCase() === this.playerName.toLowerCase()));
  }

  private _sortPlayers(ascOrder = true): void {
    this.players.sort((p1, p2) => {
      if (this._getTotalCount(p1) < this._getTotalCount(p2)) {
        return ascOrder ? -1 : 1;
      }

      if (this._getTotalCount(p1) > this._getTotalCount(p2)) {
        return ascOrder ? 1 : -1;
      }

      return 0;
    });
  }

  private _getTotalCount(player: IPlayer): number {
    return player.scores.reduce((a, b) => a + b, 0)
  }

  private _arePlayersAndScoresEqual(): boolean {
    return Object.keys(this.scoreInputs).length === Object.keys(this.players).length;
  }
}
