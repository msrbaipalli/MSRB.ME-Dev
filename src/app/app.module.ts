import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GistModule } from '@sgbj/angular-gist';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchMeComponent } from './search-me/search-me.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchMeComponent,
    IntroductionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    GistModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
