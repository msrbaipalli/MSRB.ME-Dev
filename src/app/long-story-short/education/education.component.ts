import { Component, OnInit } from '@angular/core';
import { buildDate, isEmptyString } from 'src/app/shared/utils/utils.service';
import { EDUCATION_LIST } from './education.constants';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: (typeof EDUCATION_LIST) = EDUCATION_LIST;

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
