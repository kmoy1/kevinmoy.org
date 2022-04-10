import { TestBed } from '@angular/core/testing';

import { MdService } from './md.service';

describe('MdService', () => {
  let service: MdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
