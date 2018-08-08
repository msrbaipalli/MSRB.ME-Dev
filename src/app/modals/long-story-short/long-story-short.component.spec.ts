import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongStoryShortComponent } from './long-story-short.component';

describe('LongStoryShortComponent', () => {
  let component: LongStoryShortComponent;
  let fixture: ComponentFixture<LongStoryShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongStoryShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongStoryShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
