import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditphotographyComponent } from './editphotography.component';

describe('EditphotographyComponent', () => {
  let component: EditphotographyComponent;
  let fixture: ComponentFixture<EditphotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditphotographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditphotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
