import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StocksWatchComponent } from './stocks-watch/stocks-watch.component';
import { PlayCardsCounterComponent } from './play-cards-counter/play-cards-counter.component';
import { ScoresDialogComponent } from './play-cards-counter/scores-dialog/scores-dialog.component';
import { EditPlayerDialogComponent } from './play-cards-counter/edit-player-dialog/edit-player-dialog.component';

const components = [
    StocksWatchComponent,
    PlayCardsCounterComponent,
    ScoresDialogComponent,
    EditPlayerDialogComponent
];

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [SharedModule]
})
export class ProjectsModule { }