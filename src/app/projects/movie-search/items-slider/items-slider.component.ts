import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'items-slider',
  templateUrl: './items-slider.component.html',
  styleUrls: ['./items-slider.component.scss']
})
export class ItemsSliderComponent implements OnInit {
  @Input() title: string;
  @Input() data: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
