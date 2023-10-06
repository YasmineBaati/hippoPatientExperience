import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoletteComponent } from './scolette.component';

describe('ScoletteComponent', () => {
  let component: ScoletteComponent;
  let fixture: ComponentFixture<ScoletteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoletteComponent]
    });
    fixture = TestBed.createComponent(ScoletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
