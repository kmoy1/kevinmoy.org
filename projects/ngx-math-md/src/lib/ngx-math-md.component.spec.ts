import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMathMdComponent } from './ngx-math-md.component';

describe('NgxMathMdComponent', () => {
  let component: NgxMathMdComponent;
  let fixture: ComponentFixture<NgxMathMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMathMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMathMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
