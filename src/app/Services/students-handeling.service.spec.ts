import { TestBed } from '@angular/core/testing';

import { StudentsHandelingService } from './students-handeling.service';

describe('StudentsHandelingService', () => {
  let service: StudentsHandelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsHandelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
