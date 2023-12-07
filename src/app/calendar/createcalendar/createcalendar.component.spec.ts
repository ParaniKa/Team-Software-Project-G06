import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecalendarComponent } from './createcalendar.component';

describe('CreatecalendarComponent', () => {
  let component: CreatecalendarComponent;
  let fixture: ComponentFixture<CreatecalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
