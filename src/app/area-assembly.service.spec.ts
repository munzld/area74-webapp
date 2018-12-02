import { TestBed } from '@angular/core/testing';

import { AreaAssemblyService } from './area-assembly.service';

describe('AreaAssemblyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaAssemblyService = TestBed.get(AreaAssemblyService);
    expect(service).toBeTruthy();
  });
});
