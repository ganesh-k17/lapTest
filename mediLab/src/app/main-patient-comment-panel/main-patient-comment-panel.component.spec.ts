import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPatientCommentPanelComponent } from './main-patient-comment-panel.component';

describe('MainPatientCommentPanelComponent', () => {
  let component: MainPatientCommentPanelComponent;
  let fixture: ComponentFixture<MainPatientCommentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPatientCommentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPatientCommentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
