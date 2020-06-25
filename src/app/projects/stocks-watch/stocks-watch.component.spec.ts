import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksWatchComponent } from './stocks-watch.component';

describe('StocksWatchComponent', () => {
  let component: StocksWatchComponent;
  let fixture: ComponentFixture<StocksWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
