import { TestBed } from '@angular/core/testing';

import { ServiceGrupoTaskService } from './service-grupo-task.service';

describe('ServiceGrupoTaskService', () => {
  let service: ServiceGrupoTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGrupoTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
