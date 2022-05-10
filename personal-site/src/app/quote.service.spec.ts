import { TestBed } from '@angular/core/testing';
import { Quote } from './models';
import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;
  let expectedMaxQuoteId = 36;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should only deliver quotes in the requested range', async () => {
    const quotes : Quote[]  = await service.getQuotesInRange(0, 10).toPromise();
    expect(quotes[0].id).toEqual(1);
    expect(quotes[9].id).toEqual(10);
  });

  it('Should only deliver at most the number of requested quotes', async () => {
    const quotes : Quote[]  = await service.getQuotesInRange(0, 20).toPromise();
    expect(quotes.length).toBeLessThanOrEqual(20,'Should have contained 20 or less quotes');
  });

  it('Should return the maximum quote Id', () => {
    const maxQuoteId = service.maxQuoteId;
    expect(maxQuoteId).toEqual(expectedMaxQuoteId);
  });
});
