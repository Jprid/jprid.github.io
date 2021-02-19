import { Injectable } from '@angular/core';
import { Quote } from './models';
import { QUOTES } from './constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes : Quote[] = QUOTES;
  
  constructor() {}

  getQuotesInRange(startIndex: number, endIndex: number): Observable<Quote[]> {
    return of(this.quotes.filter(x => x.id >= startIndex && x.id <= endIndex));
  }

  get maxQuoteId() {
    // console.log(this.quotes[this.quotes.length - 1]);
    return this.quotes[this.quotes.length - 1].id;
  }
}