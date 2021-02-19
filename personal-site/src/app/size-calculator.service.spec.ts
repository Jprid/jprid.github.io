import { TestBed } from '@angular/core/testing';

import { SizeCalculatorService } from './size-calculator.service';

describe('SizeCalculatorService', () => {
  let service: SizeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
