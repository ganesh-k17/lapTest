import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediAboutMainComponent } from './medi-about-main.component';

describe('MediAboutMainComponent', () => {
  let component: MediAboutMainComponent;
  let fixture: ComponentFixture<MediAboutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediAboutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediAboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
