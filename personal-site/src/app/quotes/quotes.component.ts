import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../constants';
import { Quote } from '../models';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public quotes : Quote[] = QUOTES;
  constructor() {
  }

  ngOnInit(): void {
  }

}
