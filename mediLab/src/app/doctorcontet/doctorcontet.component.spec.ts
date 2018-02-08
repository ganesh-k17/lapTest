import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorcontetComponent } from './doctorcontet.component';

describe('DoctorcontetComponent', () => {
  let component: DoctorcontetComponent;
  let fixture: ComponentFixture<DoctorcontetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorcontetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorcontetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
