import { TestBed } from '@angular/core/testing';

import { recentBookmarkService } from './recentbookmark.service';

describe('BookmarkService', () => {
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
