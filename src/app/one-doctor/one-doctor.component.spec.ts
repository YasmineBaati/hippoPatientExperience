import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDoctorComponent } from './one-doctor.component';

describe('OneDoctorComponent', () => {
  let component: OneDoctorComponent;
  let fixture: ComponentFixture<OneDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneDoctorComponent]
    });
    fixture = TestBed.createComponent(OneDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
