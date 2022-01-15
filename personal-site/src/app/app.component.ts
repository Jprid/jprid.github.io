import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import {ExperienceService} from "./experience.service";

declare let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  header: string;
  constructor(public router: Router, private contentService: ExperienceService) {
    this.router.events.subscribe(event => {
      if (event instanceof RouterEvent) {
          console.log(event.url);
          this.logRouterEvent(event);
      }
    });
    this.contentService = contentService;
    const author_name = this.contentService.AuthorName;
    const [first_name, middle_initial, last_name] = author_name;
    this.header = `${first_name} ${middle_initial}. ${last_name}`;
    this.title = `${first_name[0].toUpperCase()} ${middle_initial.toUpperCase()} ${last_name[0].toUpperCase()}`
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
