import { TestBed } from '@angular/core/testing';

import { InputElementService } from './input-element.service';

describe('InputElementService', () => {
  let service: InputElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
