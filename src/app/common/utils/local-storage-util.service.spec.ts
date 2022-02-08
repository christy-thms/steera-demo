import { TestBed } from '@angular/core/testing';

import { LocalStorageUtilService } from './local-storage-util.service';

describe('LocalStorageUtilService', () => {
  let service: LocalStorageUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
