import {Routes, RouterModule} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import {QuoteDetailComponent} from "./quotes/quote/quote-detail/quote-detail.component";

const appRoutes: Routes = [
    {path: 'quotes', component: QuotesComponent, pathMatch: 'prefix'},
    {path: 'resume', redirectTo: '', pathMatch: 'full'},
    {path: 'From-LinkedIn', redirectTo: '', pathMatch: 'full'},
    {path: '**', component: LandingPageComponent, pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
