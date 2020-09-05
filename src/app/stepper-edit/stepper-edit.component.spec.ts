import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEditComponent } from './stepper-edit.component';

describe('StepperEditComponent', () => {
  let component: StepperEditComponent;
  let fixture: ComponentFixture<StepperEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
