import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeComponent } from './search-me.component';

describe('SearchMeComponent', () => {
  let component: SearchMeComponent;
  let fixture: ComponentFixture<SearchMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
