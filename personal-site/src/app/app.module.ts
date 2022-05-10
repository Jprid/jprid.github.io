import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { TrimPipe } from './trim.pipe';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { LinkCardContainerComponent } from './link-card-container/link-card-container.component';
import { PositionTagContainerComponent } from './position-tag-container/position-tag-container.component';
import { QuotesComponent } from './quotes/quotes.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { QuoteComponent } from './quotes/quote/quote.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuoteDetailComponent } from './quotes/quote/quote-detail/quote-detail.component';
import { ToastComponent } from './toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent, TrimPipe, WelcomePageComponent, ContactPageComponent, ExperienceListComponent,
    LinkCardContainerComponent, PositionTagContainerComponent, LandingPageComponent,
    QuoteDetailComponent,
    QuotesComponent,
    QuoteComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule, RouterModule, Routing, ReactiveFormsModule, NgbModule, BrowserAnimationsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
