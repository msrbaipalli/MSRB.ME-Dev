import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { GistModule } from '@sgbj/angular-gist';
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
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    GistModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
