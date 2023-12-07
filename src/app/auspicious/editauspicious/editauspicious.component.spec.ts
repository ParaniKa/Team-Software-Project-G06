import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditauspiciousComponent } from './editauspicious.component';

describe('EditauspiciousComponent', () => {
  let component: EditauspiciousComponent;
  let fixture: ComponentFixture<EditauspiciousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditauspiciousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditauspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
