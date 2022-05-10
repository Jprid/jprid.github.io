import {Component, Input, OnInit} from '@angular/core';
import {Quote} from "../../models";
// import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {QuoteDetailComponent} from "./quote-detail/quote-detail.component";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [
    // NgbModal
  ]
})
export class QuoteComponent implements OnInit {
  @Input()
  quote: Quote;
  hover = false;
  citationParts: string[] = [];
  // modalRef: NgbModalRef;
  constructor(
    // private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    const citation =this.quote.citation;
    this.citationParts = citation.split(", ");
  }

  async open() {
    // const size = QuoteComponent.getModalSize(this.quote.numCharacters);
    // this.modalRef = this.modalService.open(QuoteDetailComponent, {centered: true, size: size});
    // this.modalRef.componentInstance.setQuote(this.quote);
    //await this.router.navigateByUrl(`quotes/quote-detail/${this.quote.id}`);
  }

  close() {
    // this.modalRef.dismiss();
  }

  private static getModalSize(numCharacters: number): string {
    if (numCharacters >= 1000) {
      return 'xl';
    }
    return 'lg';
  }
}
