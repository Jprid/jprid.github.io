import {Component, Input, OnInit} from '@angular/core';
import {Quote} from "../../../models";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../../toast.service";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote: string;
  @Input()
  citation: string;
  @Input()
  author: string;

  constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {  }

  ngOnInit() {  }

  setQuote(quote: Quote) {
    this.quote    = quote.quote;
    this.citation = quote.citation;
    this.author   = quote.author;
  }

  async close() {
    await this.activeModal.dismiss();
  }

  async copy() {
    const citationText = this.citation.startsWith("(") ? this.citation : `(${this.citation})`;
    const quote = `"${this.quote}" ${citationText}`
    await navigator.clipboard.writeText(quote);
    this.toastService.show('Copied quote to clipboard', quote);
  }
}
