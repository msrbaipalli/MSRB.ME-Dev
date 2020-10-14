import { NgModule } from '@angular/core';
import { LongStoryShortModule } from '../long-story-short/long-story-short.module';
import { SharedModule } from '../shared/shared.module';
import { SearchMeComponent } from './search-me.component';
import { SearchNotFoundComponent } from './search-not-found/search-not-found.component';

const components = [SearchMeComponent, SearchNotFoundComponent]

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [SharedModule, LongStoryShortModule]
})
export class SearchMeModule { }