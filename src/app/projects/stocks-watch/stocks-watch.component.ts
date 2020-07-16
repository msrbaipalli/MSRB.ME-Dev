import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-stocks-watch',
  templateUrl: './stocks-watch.component.html',
  styleUrls: ['./stocks-watch.component.css']
})
export class StocksWatchComponent implements OnInit {
  boxes = [
    {
      title: 'Hi'
    },
    {
      title: 'Boys!'
    }
  ];
  ngOnInit() {}
}
