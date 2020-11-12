import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getValueFromObjectsByType, isEmptyArray, isEmptyString, isNullOrUndefined } from 'src/app/shared/utils/utils.service';
import { IPlayer, IScoreMenu } from './play-cards-counter.interfaces';
import { ScoresDialogComponent } from './scores-dialog/scores-dialog.component';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { ARE_YOU_SURE, ERROR, SCORE_RANK_TYPE, STORAGE_TYPE_KEY } from './play-cards-counter.constants';
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
  scoreMenu: IScoreMenu;
  totalHeaderArrowDown = true;
  STORAGE_KEY: string;

  private _subscriptions: Subscription[] = [];

  constructor(
    @Inject(LOCAL_STORAGE) private _storage: StorageService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.STORAGE_KEY = this.constructor.name;
    this.players = this._getDataFromLocalStorage(STORAGE_TYPE_KEY.PLAYERS);
    this.scoreMenu = this._getScoreMenu();
    this._sortPlayers();
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addPlayer(): void {
    if (this._isPlayerNameEmpty() || this._playerExists()) {
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
      scores: [],
      score: 0
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
    return isNullOrUndefined(player.score) ? '-' : player.score;
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
        scoreInputs: this.scoreInputs,
        totalScore: player.score
      }
    });

    this._subscriptions.push(
      dialogRef.afterClosed().subscribe(() => { this._storeOnLocalStorage(); })
    );
  }

  onScoreRankTypeChange(): void {
    this._storeOnLocalStorage();
  }

  onMaxScoreChange(): void {
    this._storeOnLocalStorage();
  }

  isRankOnePlayer(player: IPlayer): boolean {
    const players: IPlayer[] = this.scoreMenu.scoreRankType === SCORE_RANK_TYPE.Low
      ? this._getPlayerBasedOnScore(SCORE_RANK_TYPE.Low)
      : this._getPlayerBasedOnScore(SCORE_RANK_TYPE.High);

    return players.some(plyr => plyr.name === player.name);
  }

  isPlayerLost(player: IPlayer): boolean {
    return !isNullOrUndefined(this.scoreMenu.maxScore) && this.scoreMenu.maxScore < player.score;
  }

  isAddPlayerDisabled(): boolean {
    return this._isPlayerNameEmpty();
  }

  getPlayerName(player: IPlayer, index: number): string {
    return (index + 1) + '. ' + player.name;
  }

  openScoresDialog(player: IPlayer): void {
    this._dialog.open(ScoresDialogComponent, {
      data: {
        player: player,
        totalScore: player.score
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
    return !!(this.players.find(item => (item.name && item.name.toLowerCase()) === (this.playerName && this.playerName.toLowerCase())));
  }

  private _sortPlayers(ascOrder = true): void {
    this.players.sort((p1, p2) => {
      if (p1.score < p2.score) {
        return ascOrder ? -1 : 1;
      }

      if (p1.score > p2.score) {
        return ascOrder ? 1 : -1;
      }

      return 0;
    });
  }

  private _arePlayersAndScoresEqual(): boolean {
    return Object.keys(this.scoreInputs).length === Object.keys(this.players).length;
  }

  private _storeOnLocalStorage(): void {
    this._storage.set(this.STORAGE_KEY + STORAGE_TYPE_KEY.PLAYERS, this.players);
    this._storage.set(this.STORAGE_KEY + STORAGE_TYPE_KEY.SCORE_MENU, this.scoreMenu);
  }

  private _getDataFromLocalStorage(key: string): any {
    return this._storage.get(this.STORAGE_KEY + key) || []
  }

  private _resetPlayersHandler(): void {
    this.players = [];
    this._storeOnLocalStorage();
  }

  private _resetScoresHandler(): void {
    this.players.forEach(player => {
      player.scores = [];
      player.score = 0;
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
      playerDetails.score = playerDetails.scores.reduce((a, b) => a + b, 0);
      this.scoreInputs[playerName] = 0;
    });

    this._sortPlayers(this.totalHeaderArrowDown);
    this._storeOnLocalStorage();
  }

  private _getPlayerBasedOnScore(scoreRankType: SCORE_RANK_TYPE): IPlayer[] {
    const players = this.players.reduce((result, player) => {
      result[player.name] = player.score
      return result;
    }, {});
    let lowestScore = getValueFromObjectsByType(players, SCORE_RANK_TYPE.Low);
    let highestScore = getValueFromObjectsByType(players, SCORE_RANK_TYPE.High);

    return this.players.filter(player =>
      (scoreRankType === SCORE_RANK_TYPE.Low && player.score === lowestScore) || (scoreRankType === SCORE_RANK_TYPE.High && player.score === highestScore)
    );
  }

  private _getScoreMenu(): IScoreMenu {
    const scoreMenu = this._getDataFromLocalStorage(STORAGE_TYPE_KEY.SCORE_MENU);
    return isEmptyArray(scoreMenu) ? this._getDefaultScoreMenu() : scoreMenu;
  }

  private _getDefaultScoreMenu(): IScoreMenu {
    return {
      scoreRankType: SCORE_RANK_TYPE.Low,
      maxScore: 200
    };
  }

  private _isPlayerNameEmpty(): boolean {
    return isNullOrUndefined(this.playerName) || isEmptyString(this.playerName);
  }
}
