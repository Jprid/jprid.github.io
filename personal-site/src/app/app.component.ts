import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

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

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof RouterEvent) {
        if (event instanceof NavigationEnd) {
          this.logNavigationEnd(event);
        } else {
          this.logRouterEvent(event);
        }
      }
    });
  }

  private logNavigationEnd(event: NavigationEnd) {
    gtag(
      'event',
      'router_navigation_end_url_after_redirects',
      {
        page_path: event.urlAfterRedirects,
      }
    );
  }

  private logRouterEvent(event: RouterEvent) {
    gtag(
      'event',
      'router_event_url',
      {
        page_path: event.url,
      }
    );
  }
}
