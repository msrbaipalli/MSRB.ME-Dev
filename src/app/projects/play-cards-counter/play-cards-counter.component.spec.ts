import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { PlayCardsCounterComponent } from './play-cards-counter.component';
import { ERROR } from './play-cards-counter.constants';

fdescribe('PlayCardsCounterComponent', () => {
  let component: PlayCardsCounterComponent;
  let fixture: ComponentFixture<PlayCardsCounterComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PlayCardsCounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCardsCounterComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('Test 1: should set properties values correctly', () => {
      expect(component.STORAGE_KEY).toEqual(component.constructor.name);
      expect(component.players).toBeDefined();
      expect(component.scoreMenu).toEqual({
        scoreRankType: 'low',
        maxScore: 200
      });
    });
  });

  describe('addPlayer', () => {
    beforeEach(() => {
      spyOn(dialog, 'open');
    });

    it('Test 1: should open dialog to promt about invalid player name.', () => {
      component.playerName = null;

      component.addPlayer();

      expect(dialog.open).toHaveBeenCalledWith(
        DialogComponent,
        {
          data: {
            title: ERROR,
            message: 'Enter valid player name!'
          }
        }
      );
    });

    it('Test 2: should open dialog to promt about player already exist.', () => {
      component.playerName = 'Test 1';
      component.players = [
        {
          name: 'Test 1',
          scores: [],
          score: 0
        }
      ];

      component.addPlayer();

      expect(dialog.open).toHaveBeenCalledWith(
        DialogComponent,
        {
          data: {
            title: ERROR,
            message: 'Player already exists!'
          }
        }
      );
    });

    it('Test 3: should open dialog to promt about player already exist.', () => {
      component.playerName = 'Test 1';
      component.players = [];

      component.addPlayer();

      expect(dialog.open).not.toHaveBeenCalled();
      expect(component.players).toEqual([
        {
          name: 'Test 1',
          scores: [],
          score: 0
        }
      ]);
      expect(component.playerName).toEqual('');
    });
  });
});
