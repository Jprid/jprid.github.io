import { Injectable } from '@angular/core';

declare let gtag: (...args) => void;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    gtag( 'event', eventName, {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue
    });
  }

  public emitEventUrl(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    destinationUrl: string = null) {
      gtag('event', eventName, {
        eventCategory,
        eventLabel,
        eventAction,
        destinationUrl
      });
  }
}
