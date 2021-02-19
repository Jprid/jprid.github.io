import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QUOTES } from '../constants';
import { ElementDimension, Quote } from '../models';
import { QuoteService } from '../quote.service';
import { SizeCalculatorService } from '../size-calculator.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  private _numQuotesToDisplay = 10;
  private _backMessage = 'Home';
  private _nextMessage = `Next ${this._numQuotesToDisplay} Quotes`;

  public quotes : Quote[] = QUOTES;
  public startIndex = 0;
  public endIndex: number;
  public maxIndex: number;
  
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private quoteService : QuoteService,
    private sizeCalculatorService : SizeCalculatorService
  ) { }

  get nextMessage() {
    return this._nextMessage;
  }

  get backMessage() {
    return this._backMessage;
  }

  ngOnInit(): void {
    this.calculateQuoteSize(this.quotes[0]);
    this.route.params.subscribe(params => {
      if(params['startIndex'] !== undefined && params['endIndex'] !== undefined) {
        this.startup(params);
      }}
    );
  }

  calculateQuoteSize(quote : Quote) : ElementDimension {
    let height = window.innerHeight, width = window.innerWidth;
    let area = height * width;
    let calculatedHeight = 0, calculatedWidth = 0;
    let dimension : ElementDimension = {height: calculatedHeight, width: calculatedWidth};
    let columnWidth = width / 4, rowWidth = width / 20;
    console.log(`height: ${height}, width: ${width}, columnWidth: ${columnWidth}, rowWidth: ${rowWidth}`);
    if(height > width) {
      return this.calculatePortraitQuoteSize(height, width, quote);
    } else {
      return this.calculateLandscapeQuoteSize(height, width, quote);
    }
  }
  calculatePortraitQuoteSize(height : number, width : number, quote : Quote) : ElementDimension {
    return null;
  }

  calculateLandscapeQuoteSize(height : number, width : number, quote : Quote) : ElementDimension {
    return null;
  }

  /**
   * @method getNextSetOfQuotes()
   * get the next set of quotes for the active component
   */
  getNextSetOfQuotes() {
    const limit = this.quoteService.maxQuoteId;
    if(this._numQuotesToDisplay > 0 && this.startIndex < limit) {
      const newVal : number = this.startIndex + this._numQuotesToDisplay;
      if (newVal <= limit) { // don't navigate unless we are within bounds
        this.router.navigateByUrl(`quotes/${newVal}/${newVal + this._numQuotesToDisplay}`);
        this.startIndex = newVal;
        this.endIndex = newVal + this._numQuotesToDisplay;
        this.updateMessage();
      }
    }
  }

  /**
   * @method goBack() 
   * this method contains the logic used to navigate backwards in/on the quotes page
   */
  goBack() {
    if (this.startIndex > 0) {
      console.log(`start: ${this.startIndex} end: ${this.startIndex - this._numQuotesToDisplay}`);
      const newVal = this.startIndex - this._numQuotesToDisplay;
      if(newVal >= 0) {
        this.router.navigateByUrl(`quotes/${newVal}/${this.startIndex}`);
      }
      this.updateMessage();
    } else {
      this.router.navigateByUrl('');
    } 
  }

  private updateMessage() {
    if(this.startIndex <= 0) {
      this._backMessage = 'Home';
    } else {
      this._backMessage = `Go Back ${this._numQuotesToDisplay} Quotes`
    }
  }

  private startup(params) {
    this.startIndex = +params['startIndex'];
    this.endIndex = +params['endIndex'];
    this.quoteService.getQuotesInRange(this.startIndex, this.startIndex + this._numQuotesToDisplay)
      .subscribe(quotes => this.quotes = quotes);
    this.updateMessage();
  }
}
