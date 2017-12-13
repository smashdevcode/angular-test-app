import { TestBed, inject } from '@angular/core/testing';

import { TestContentService } from './test-content.service';

describe('TestContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestContentService]
    });
  });

  it('should be created', inject([TestContentService], (service: TestContentService) => {
    expect(service).toBeTruthy();
  }));
});
