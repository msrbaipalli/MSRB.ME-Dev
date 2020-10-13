import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'src/app/shared/utils/utils.service';
import { CERTIFICATE_LIST } from './certificates.constants';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificateList = CERTIFICATE_LIST;

  constructor() { }

  ngOnInit() {
  }

  onViewCertificateClick(url: string): void {
    if (isNullOrUndefined(url)) {
      return;
    }

    window.open(url, '_blank');
  }
}
