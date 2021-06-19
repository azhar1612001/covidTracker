import { TestBed } from '@angular/core/testing';

import { AllCovidDataService } from './all-covid-data.service';

describe('AllCovidDataService', () => {
  let service: AllCovidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCovidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
