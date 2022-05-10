import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QUOTES} from '../constants';
import {QueryParam, QueryType, Quote} from '../models';
import {QuoteService} from '../quote.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  private _numQuotesToDisplay = 32;
  private _backMessage = 'Home';
  private _nextMessage = `Next ${this._numQuotesToDisplay} Quotes`;
  private _quotes : Quote[] = QUOTES;
  private endIndex: number = this._numQuotesToDisplay;

  pageDescriptor = "This is a searchable collection of some of my favorite quotes. Hover over a quote to get more information about the author and source.";
  quotes : Quote[];
  index: number = 0;
  queryText: string = '';
  form: FormGroup;
  showQuotes: boolean = true;
  showAsTable: boolean = false;
  private useAlgorithmToPopulate = true;m
  constructor(
    private route:        ActivatedRoute,
    private quoteService: QuoteService,
    public  router:       Router,
    private fb: FormBuilder
  ) {  }

  get nextMessage() {
    return this._nextMessage;
  }

  get backMessage() {
    return this._backMessage;
  }

  ngOnInit(): void {
    this.form     = this.fb.group({searchBar: ['']});
    this.route.queryParams.subscribe(params => {
      if (params['author'] !== undefined) {
        const authorQuery = params['author'];
        console.log(authorQuery);
        this.quotes = this.quoteService.getQuotesWithAuthor(authorQuery);
      } else {
        this.quotes = this.quoteService.quotes;
      }
    })
    this.quotes = this.quoteService.quotes;//this._quotes.slice(0, this._numQuotesToDisplay);
    console.log(this._quotes);
    window.onload = (event) => {
      if (this.useAlgorithmToPopulate) {
        const element = document.getElementsByClassName('quote-container')[0];
        if (element !== undefined) {
          const quoteGridElement = getComputedStyle(element);
          const {gridTemplateColumns, gridTemplateRows} = quoteGridElement;
          const numColumns = gridTemplateColumns.split(" ").length;
          const numRows = gridTemplateRows.split(" ").length;
          const dimensions = numRows * numColumns;
          this.quotes  = this.quoteService.getQuotesToMatchDimension(120);
          console.log(dimensions);
        }
      }
    }
  }

  onPageLoad() {

  }

  /**
   * @method getNextSetOfQuotes()
   * get the next set of quotes for the active component
   */
  getNextSetOfQuotes() {
    const limit = this.quoteService.maxQuoteId;
    if(this._numQuotesToDisplay > 0 && this.index < limit) {
      const newVal : number = this.index + this._numQuotesToDisplay;
      if (newVal <= limit) { // don't navigate unless we are within bounds
        this.index = newVal;
        this.endIndex = newVal + this._numQuotesToDisplay;
        this.quotes = this._quotes.slice(this.index, this.endIndex)
      }
    }
  }

  /**
   * @method goBack()
   * this method contains the logic used to navigate backwards in/on the quotes page
   */
  goBack() {
    if (this.index > 0) {
      const newVal = (this.index - this._numQuotesToDisplay);
      console.log(`end: ${this.index} start: ${newVal}`);
      if(newVal >= 0) {
        this.quotes = this._quotes.slice(newVal, this.index);
        this.index = newVal;
      }
    } else {
      window.location.reload();
    }
  }

  /**
   *
   * @param $event
   */
  handleKeydown($event: KeyboardEvent) {
    switch ($event.key) {
      case 'Enter':
        const [type, param] = this.getQueryType(this.form.get('searchBar').value);
        const query: QueryParam = new QueryParam(type, param);
        console.log(query);
        this._quotes = this.quoteService.getQuotesLike(query);
        this.showQuotes = true;
        break;
    }
    this.quotes = this._quotes.slice(this.index, this.endIndex);
  }

  private getQueryType(text: string): [QueryType, string] {
    if (text.includes('author=') || text.includes('Author=')) {
      return [QueryType.AUTHOR, text.replace(/[Aa]uthor\=/g, '')];
    } else if (text.includes('tag=')) {
      return [QueryType.TAG, text.replace(/[Tt]ag\=/g, '')];
    } else {
      return [QueryType.TEXT, text.replace(/[Tt]ext\=/g, '')];
    }
  }


}
