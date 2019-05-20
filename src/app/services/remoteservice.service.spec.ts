import { TestBed } from '@angular/core/testing';

import { RemoteserviceService } from './remoteservice.service';

describe('RemoteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteserviceService = TestBed.get(RemoteserviceService);
    expect(service).toBeTruthy();
  });
});
