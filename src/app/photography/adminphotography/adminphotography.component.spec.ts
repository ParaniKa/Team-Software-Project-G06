import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminphotographyComponent } from './adminphotography.component';

describe('AdminphotographyComponent', () => {
  let component: AdminphotographyComponent;
  let fixture: ComponentFixture<AdminphotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminphotographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminphotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
