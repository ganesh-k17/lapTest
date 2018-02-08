import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedServicePanelComponent } from './med-service-panel.component';

describe('MedServicePanelComponent', () => {
  let component: MedServicePanelComponent;
  let fixture: ComponentFixture<MedServicePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedServicePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedServicePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
