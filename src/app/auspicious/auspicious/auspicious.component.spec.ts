import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspiciousComponent } from './auspicious.component';

describe('AuspiciousComponent', () => {
  let component: AuspiciousComponent;
  let fixture: ComponentFixture<AuspiciousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuspiciousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
