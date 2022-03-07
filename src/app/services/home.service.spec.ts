import { TestBed } from '@angular/core/testing';

import { NameofserviceService } from './home.service';

describe('NameofserviceService', () => {
  let service: NameofserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameofserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
