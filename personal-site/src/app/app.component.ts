import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TRACKING_ID } from './constants';

declare let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles: string[];
  header = 'John M. Pridmore';
  title = 'J.M.P.';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag(
          'config',
          TRACKING_ID,
          {
            page_path: event.urlAfterRedirects
          }
        );
      }
    });
  }
}
