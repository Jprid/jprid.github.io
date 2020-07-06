import { Component, Input } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles: string[];
  constructor(private service : PageService) {
    this.titles = this.service.getTitles();
  }
  header = 'John M. Pridmore';
  title = 'J.M.P.';
}
