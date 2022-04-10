import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemMdDisplayComponent } from './problem-md-display.component';

describe('ProblemMdDisplayComponent', () => {
  let component: ProblemMdDisplayComponent;
  let fixture: ComponentFixture<ProblemMdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemMdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemMdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
