import { TestBed } from '@angular/core/testing';

import { dropDownService } from './dropdown.service';

describe('dropDownService', () => {
  let service: dropDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dropDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
