import { TestBed } from '@angular/core/testing';

import { ServiceGroupService } from './service-group.service';

describe('ServiceGroupService', () => {
  let service: ServiceGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
