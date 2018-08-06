import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { GistModule } from '@sgbj/angular-gist';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchMeComponent } from './search-me/search-me.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './modals/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchMeComponent,
    IntroductionComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    GistModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
