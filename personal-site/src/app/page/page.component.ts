import { Component, OnInit} from '@angular/core';
import { PageService } from '../page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  key = '';
  contents : string[] | any;
  constructor(private pageService : PageService,
     private activatedRout: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(params => {
      this.key = params.get('key')
      this.contents = this.pageService.formatContentAsArbitrarilyLargeChunksOfSentences(this.key);
      console.log(this.contents);
      
    });
  }
}
