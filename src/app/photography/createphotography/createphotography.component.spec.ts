import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephotographyComponent } from './createphotography.component';

describe('CreatephotographyComponent', () => {
  let component: CreatephotographyComponent;
  let fixture: ComponentFixture<CreatephotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatephotographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatephotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
