import { TestBed } from '@angular/core/testing';

import { FolderSsearchService } from './folder-ssearch.service';

describe('FolderSsearchService', () => {
  let service: FolderSsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderSsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
