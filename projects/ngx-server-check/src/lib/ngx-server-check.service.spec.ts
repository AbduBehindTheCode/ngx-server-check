import { TestBed } from '@angular/core/testing';

import { NgxServerCheckService } from './ngx-server-check.service';

describe('NgxServerCheckService', () => {
  let service: NgxServerCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxServerCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
