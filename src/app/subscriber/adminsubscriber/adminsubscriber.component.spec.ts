import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsubscriberComponent } from './adminsubscriber.component';

describe('AdminsubscriberComponent', () => {
  let component: AdminsubscriberComponent;
  let fixture: ComponentFixture<AdminsubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
