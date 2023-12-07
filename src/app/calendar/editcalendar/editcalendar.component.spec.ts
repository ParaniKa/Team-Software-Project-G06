import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcalendarComponent } from './editcalendar.component';

describe('EditcalendarComponent', () => {
  let component: EditcalendarComponent;
  let fixture: ComponentFixture<EditcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
