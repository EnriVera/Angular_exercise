import { TestBed } from '@angular/core/testing';

import { ServiceGrupoPersonService } from './service-grupo-person.service';

describe('ServiceGrupoPersonService', () => {
  let service: ServiceGrupoPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGrupoPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
