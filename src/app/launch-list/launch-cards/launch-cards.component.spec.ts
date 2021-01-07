import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCardsComponent } from './launch-cards.component';

describe('LaunchCardsComponent', () => {
  let component: LaunchCardsComponent;
  let fixture: ComponentFixture<LaunchCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
