import { TestBed } from '@angular/core/testing';

import { NgxMathMdService } from './ngx-math-md.service';

describe('NgxMathMdService', () => {
  let service: NgxMathMdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMathMdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
