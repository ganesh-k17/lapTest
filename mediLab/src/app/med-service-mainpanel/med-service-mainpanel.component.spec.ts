import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedServiceMainpanelComponent } from './med-service-mainpanel.component';

describe('MedServiceMainpanelComponent', () => {
  let component: MedServiceMainpanelComponent;
  let fixture: ComponentFixture<MedServiceMainpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedServiceMainpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedServiceMainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
