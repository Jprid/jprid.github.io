import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `<app-welcome-page></app-welcome-page>
    <app-experience-list id="experience"></app-experience-list>
    <app-contact-page></app-contact-page>
  `,
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
