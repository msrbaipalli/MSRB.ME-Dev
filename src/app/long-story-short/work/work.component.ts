import { Component, OnInit } from '@angular/core';
import { buildDate, isEmptyString } from 'src/app/shared/utils/utils.service';
import { WORK_EXPERIENCE_LIST } from './work.constants';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workExperiences = WORK_EXPERIENCE_LIST;

  constructor() { }

  ngOnInit() { }

  getClientDate(client: any): string {
    return buildDate(client.beginDate, client.endDate);
  }

  onCompanyTitleClick(url: string): void {
    if (isEmptyString(url)) {
      return;
    }

    window.open(url, '_blank');
  }
}
