import { TestBed } from '@angular/core/testing';

import { ServiceChasseService } from './service-chasse.service';

describe('ServiceChasseService', () => {
  let service: ServiceChasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
