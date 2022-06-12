import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIpynbComponent } from './ngx-ipynb.component';

describe('NgxIpynbComponent', () => {
  let component: NgxIpynbComponent;
  let fixture: ComponentFixture<NgxIpynbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIpynbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIpynbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
