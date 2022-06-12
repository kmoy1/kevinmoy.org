import { TestBed } from '@angular/core/testing';

import { NgxIpynbService } from './ngx-ipynb.service';

describe('NgxIpynbService', () => {
  let service: NgxIpynbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIpynbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
