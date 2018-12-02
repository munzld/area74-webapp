import { TestBed } from '@angular/core/testing';

import { AreaCommitteeService } from './area-committee.service';

describe('AreaCommitteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaCommitteeService = TestBed.get(AreaCommitteeService);
    expect(service).toBeTruthy();
  });
});
