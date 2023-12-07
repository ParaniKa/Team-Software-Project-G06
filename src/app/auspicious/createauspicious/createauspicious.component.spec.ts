import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateauspiciousComponent } from './createauspicious.component';

describe('CreateauspiciousComponent', () => {
  let component: CreateauspiciousComponent;
  let fixture: ComponentFixture<CreateauspiciousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateauspiciousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateauspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
