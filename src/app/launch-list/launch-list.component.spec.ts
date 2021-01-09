
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LaunchListComponent } from './launch-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchService } from '../services/launch-data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    const launchServiceStub = {
      getAllLaunchResults: () => ({ subscribe: f => f({body:'43'}) }),
      getDataByPersistedUrl: () => ({ subscribe: f => f({body:'43'}) }),

    }
    TestBed.configureTestingModule({
      declarations: [LaunchListComponent, LaunchListComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: LaunchService, useValue: launchServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('makes call to ngOnInit ', () => {
    fixture.whenStable().then(() => {
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  it('makes call to filterOnClick ', () => {
    fixture.whenStable().then(() => {
      component.filterOnClick(2014);
      expect(component.filterOnClick).toHaveBeenCalled();
    });
  });
  it('makes call to launchStatus ', () => {
    fixture.whenStable().then(() => {
      component.landStatusSelected = true;
      component.launchStatus(true);
      component.landStatusSelected = false;
      component.launchStatus(false);
      component.landStatusSelected = undefined;
      component.launchStatus(true);
      component.landStatusSelected = undefined;
      component.launchStatus(false);
      expect(component.launchStatus).toHaveBeenCalled();
    });
  });

  it('makes call to landStatus ', () => {
    fixture.whenStable().then(() => {
      component.launchStatusSelected = true;
      component.landStatus(true);
      component.launchStatusSelected = false;
      component.landStatus(false);
      component.launchStatusSelected = undefined;
      component.landStatus(true);
      component.launchStatusSelected = undefined;
      component.landStatus(false);
      expect(component.landStatus).toHaveBeenCalled();
    });
  });
});
