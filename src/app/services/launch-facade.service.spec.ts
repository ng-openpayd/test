import { TestBed } from '@angular/core/testing';

import { LaunchFacadeService } from './launch-facade.service';

describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
