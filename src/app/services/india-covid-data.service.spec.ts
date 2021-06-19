import { TestBed } from '@angular/core/testing';

import { IndiaCovidDataService } from './india-covid-data.service';

describe('IndiaCovidDataService', () => {
  let service: IndiaCovidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiaCovidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
