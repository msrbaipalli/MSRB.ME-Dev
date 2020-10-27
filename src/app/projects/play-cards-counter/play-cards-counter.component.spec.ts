import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCardsCounterComponent } from './play-cards-counter.component';

describe('PlayCardsCounterComponent', () => {
  let component: PlayCardsCounterComponent;
  let fixture: ComponentFixture<PlayCardsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayCardsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCardsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
