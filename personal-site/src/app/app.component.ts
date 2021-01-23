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
          console.log(event.url);
          this.logRouterEvent(event);
      }
    });
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
