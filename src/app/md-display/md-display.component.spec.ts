import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDisplayComponent } from './md-display.component';

describe('MdDisplayComponent', () => {
  let component: MdDisplayComponent;
  let fixture: ComponentFixture<MdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
