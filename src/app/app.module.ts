import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchMeComponent } from './search-me/search-me.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { StocksWatchComponent } from './projects/stocks-watch/stocks-watch.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './info/info.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { SharedModule } from './shared/shared.module';
import { LongStoryShortModule } from './long-story-short/long-story-short.module';
import { SearchMeModule } from './search-me/search-me.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    FooterComponent,
    StocksWatchComponent,
    InfoComponent
  ],
  imports: [
    AppRoutingModule,
    LongStoryShortModule,
    SearchMeModule,
    SharedModule,
    NgxGistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
