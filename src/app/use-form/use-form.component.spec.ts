import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFormComponent } from './use-form.component';

describe('UseFormComponent', () => {
  let component: UseFormComponent;
  let fixture: ComponentFixture<UseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
