import { TestBed } from '@angular/core/testing';

import { SemanticSearchService } from './semanticsearch.service';

describe('SemanticSearchService', () => {
  let service: SemanticSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemanticSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
