import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CertificatesComponent } from './certificates/certificates.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { LongStoryShortComponent } from './long-story-short.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const components = [
    CertificatesComponent,
    EducationComponent,
    InterestsComponent,
    LongStoryShortComponent,
    NavbarComponent,
    SkillsComponent,
    WorkComponent
]

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [SharedModule]
})
export class LongStoryShortModule { }