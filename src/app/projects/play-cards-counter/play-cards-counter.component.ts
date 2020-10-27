import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { isEmptyString, isNullOrUndefined } from 'src/app/shared/utils/utils.service';
import { IPlayer } from './play-cards-counter.interfaces';
import { ScoresDialogComponent } from './scores-dialog/scores-dialog.component';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { ARE_YOU_SURE, ERROR } from './play-cards-counter.constants';
import { EditPlayerDialogComponent } from './edit-player-dialog/edit-player-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-cards-counter',
  templateUrl: './play-cards-counter.component.html',
  styleUrls: ['./play-cards-counter.component.scss']
})
export class PlayCardsCounterComponent implements OnInit, OnDestroy {
  playerName: string = '';
  players: IPlayer[] = [];
  scoreInputs = {};
  totalHeaderArrowDown = true;
  STORAGE_KEY: string;

  private _subscriptions: Subscription[] = [];

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.STORAGE_KEY = this.constructor.name;
    this.players = this._getDataFromLocalStorage();
    this._sortPlayers();
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addPlayer(): void {
    if (isNullOrUndefined(this.playerName) || isEmptyString(this.playerName) || this._playerExists()) {
      this._dialog.open(DialogComponent, {
        data: {
          title: ERROR,
          message: this._playerExists() ? 'Player already exists!' : 'Enter valid player name!'
        }
      });
      return;
    }

    this.players.push({
      name: this.playerName,
      scores: []
    });

    this.playerName = '';
    this._storeOnLocalStorage();
  }

  addScore(): void {
    if (!this._areScoresValid() || !this._arePlayersAndScoresEqual()) {
      this._dialog.open(DialogComponent, {
        data: {
          title: ERROR,
          message: 'Enter valid score for all the players!'
        }
      });
      return;
    }

    if (!(Object.values(this.scoreInputs).every(value => value === 0))) {
      this._addScoresHandler();
      return;
    }

    this._dialog.open(DialogComponent, {
      data: {
        title: ARE_YOU_SURE,
        message: 'Do you want to add 0 score to all the players?',
        confirmCallback: () => { this._addScoresHandler() }
      }
    });
  }

  hasScores(player: IPlayer): boolean {
    return player.scores.length > 0;
  }

  getPlayerTotalScore(player: IPlayer): number | string {
    const total = this._getTotalCount(player);
    return isNullOrUndefined(this._getTotalCount(player)) ? '-' : total;
  }

  onTotalHeaderClick(): void {
    this.totalHeaderArrowDown = !this.totalHeaderArrowDown;
    this._sortPlayers(this.totalHeaderArrowDown);
    this._storeOnLocalStorage();
  }

  onPlayerClick(player: IPlayer): void {
    let dialogRef = this._dialog.open(EditPlayerDialogComponent, {
      data: {
        player: player,
        players: this.players,
        totalScore: this._getTotalCount(player)
      }
    });

    this._subscriptions.push(
      dialogRef.afterClosed().subscribe(() => { this._storeOnLocalStorage(); })
    );
  }

  openScoresDialog(player: IPlayer): void {
    this._dialog.open(ScoresDialogComponent, {
      data: {
        player: player,
        totalScore: this._getTotalCount(player)
      }
    });
  }

  resetScores(showDialog = true): void {
    if (!showDialog) {
      this._resetScoresHandler();
      return;
    }

    this._dialog.open(DialogComponent, {
      data: {
        title: ARE_YOU_SURE,
        message: 'This action will reset scores for all the players!',
        confirmCallback: () => { this._resetScoresHandler() }
      }
    });
  }

  resetPlayers(): void {
    this._dialog.open(DialogComponent, {
      data: {
        title: ARE_YOU_SURE,
        message: 'This action will reset all the players!',
        confirmCallback: () => { this._resetPlayersHandler() }
      }
    });
  }

  removePlayer({ name }: IPlayer): void {
    this._dialog.open(DialogComponent, {
      data: {
        title: ARE_YOU_SURE,
        message: `This action will remove player <b>${name}</b>!`,
        confirmCallback: () => { this._removePlayerHandler(name) }
      }
    });
  }

  private _areScoresValid(): boolean {
    return !Object.values(this.scoreInputs).some((value: any) => isNullOrUndefined(value) || isNaN(value));
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

  private _storeOnLocalStorage(): void {
    this.storage.set(this.STORAGE_KEY, this.players);
  }

  private _getDataFromLocalStorage(): IPlayer[] {
    return this.storage.get(this.STORAGE_KEY) || []
  }

  private _resetPlayersHandler(): void {
    this.players = [];
    this._storeOnLocalStorage();
  }

  private _resetScoresHandler(): void {
    this.players.forEach(player => {
      player.scores = [];
    });
    this._storeOnLocalStorage();
  }

  private _removePlayerHandler(name: string): void {
    this.players = this.players.filter(player => player.name !== name);
    this.scoreInputs = Object.keys(this.scoreInputs).reduce((result, player) => {
      if (player === name) {
        return result;
      }

      result[player] = this.scoreInputs[player];
      return result;
    }, {});

    this._sortPlayers(this.totalHeaderArrowDown);
    this._storeOnLocalStorage();
  }

  private _addScoresHandler(): void {
    Object.keys(this.scoreInputs).forEach(playerName => {
      const playerDetails = this.players.find(item => item.name === playerName);
      const playerScore = this.scoreInputs[playerName];

      if (!playerDetails || isNullOrUndefined(playerScore)) {
        return;
      }

      playerDetails.scores.push(playerScore);
      this.scoreInputs[playerName] = 0;
    });

    this._sortPlayers(this.totalHeaderArrowDown);
    this._storeOnLocalStorage();
  }
}
