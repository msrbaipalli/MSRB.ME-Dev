import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-stocks-watch',
  templateUrl: './stocks-watch.component.html',
  styleUrls: ['./stocks-watch.component.css']
})
export class StocksWatchComponent implements OnInit {
todo = [
  'Get to work',
  'Pick up groceries',
  'Go home',
  'Fall asleep'
];

done = [
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Walk dog'
];

drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  ngOnInit() {}
}
