import { TestBed } from '@angular/core/testing';

import { HttpsucursalService } from './httpsucursal.service';

describe('HttpsucursalService', () => {
  let service: HttpsucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
