import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevieComponent } from './revie.component';

describe('RevieComponent', () => {
  let component: RevieComponent;
  let fixture: ComponentFixture<RevieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevieComponent]
    });
    fixture = TestBed.createComponent(RevieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
