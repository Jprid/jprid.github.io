import {Injectable} from '@angular/core';
import {QueryParam, QueryType, Quote} from './models';
import {QUOTES} from './constants';
import {Observable, of} from 'rxjs';
import {buildQuoteTree, QuoteGalleryGreedyAlgorithm, TreeNode} from "./utility/binary-search-tree";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private _quotes : Quote[] = QUOTES;
  private readonly root: TreeNode;

  constructor() {
    for (const q of this._quotes) {
      q.class = this.getClassForQuote(q);
    }
    const quoteCopy = this._quotes.slice(0, QUOTES.length);
    quoteCopy.forEach(q => console.log(q));
    this.root = buildQuoteTree(quoteCopy);
  }

  getQuotesToMatchDimension(totalCellsForGallery: number) {
    const algorithm = new QuoteGalleryGreedyAlgorithm();
    return algorithm.solve(totalCellsForGallery, this.root);
  }

  getClassForQuote(quote: Quote) {
    let retVal: string;
    if (quote.numCharacters < 40) {
      retVal = 'h-1-w-1';
    }
    else if (quote.numCharacters <= 100) {
      retVal = 'h-2-w-1';
    }
    else if (quote.numCharacters < 110) {
      retVal = 'h-3-w-1';
    }
    else if (quote.numCharacters < 107) {
      retVal = 'h-4-w-1';
    }
    else if (quote.numCharacters >= 107 && quote.numCharacters < 143) {
      retVal = 'h-2-w-2';
    }
    else if (quote.numCharacters >= 143 && quote.numCharacters < 300) {
      retVal = 'h-2-w-3';
    }
    else if (quote.numCharacters >= 300 && quote.numCharacters <= 500) {
      retVal = 'h-6-w-2';
    }
    else if (quote.numCharacters > 500) {
      retVal = 'h-9-w-3';
    }
    quote.cellsTakenUp = this.getCellDimensionsForQuote(retVal);
    return retVal;
  }

  getCellDimensionsForQuote(cssClass: string): number {
    const [_1, col, _, row] = cssClass.split("-");
    //console.log(col, row);
    return parseInt(col,10) * parseInt(row,10);
  }

  getQuotesInRange(startIndex: number, endIndex: number): Observable<Quote[]> {
    return of(this._quotes.filter(x => x.id >= startIndex && x.id <= endIndex));
  }

  get maxQuoteId() {
    // console.log(this.quotes[this.quotes.length - 1]);
    return this._quotes[this._quotes.length - 1].id;
  }

  getQuotesWithAuthor(authorQuery: any) {
    return this._quotes.filter(quote => quote.author.toLowerCase() === authorQuery.toLowerCase());
  }

  getQuotesLike(param: QueryParam) {
    switch(param.type) {
      case QueryType.AUTHOR:
        return this.getQuotesWithAuthor(param.param);
      case QueryType.TAG:
        break;
      case QueryType.TEXT:
      default:
        return this._quotes.filter(quote => quote.quote.includes(param.param));
    }
  }

  get quotes() {return this._quotes;}

  getQuote(id: number): Quote { return QUOTES[id]; }
}
