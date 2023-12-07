import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminauspiciousComponent } from './adminauspicious.component';

describe('AdminauspiciousComponent', () => {
  let component: AdminauspiciousComponent;
  let fixture: ComponentFixture<AdminauspiciousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminauspiciousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminauspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
