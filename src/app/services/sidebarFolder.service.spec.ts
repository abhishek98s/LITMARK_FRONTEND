import { TestBed } from '@angular/core/testing';

import { sidebarFolderService } from './sidebarFolder.service';

describe('FolderService', () => {
  let service: sidebarFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(sidebarFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
