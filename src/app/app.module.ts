import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchMeComponent } from './search-me/search-me.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './modals/about/about.component';
import { LongStoryShortComponent } from './modals/long-story-short/long-story-short.component';
import { WorkComponent } from './modals/long-story-short/work/work.component';
import { EducationComponent } from './modals/long-story-short/education/education.component';
import { SkillsComponent } from './modals/long-story-short/skills/skills.component';
import { InterestsComponent } from './modals/long-story-short/interests/interests.component';
import { NavbarComponent } from './modals/long-story-short/navbar/navbar.component';
import { CertificatesComponent } from './modals/long-story-short/certificates/certificates.component';
import { StocksWatchComponent } from './projects/stocks-watch/stocks-watch.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchMeComponent,
    IntroductionComponent,
    FooterComponent,
    AboutComponent,
    LongStoryShortComponent,
    WorkComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    NavbarComponent,
    CertificatesComponent,
    StocksWatchComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    MaterialModule,
    NgxGistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
