import {Routes, RouterModule} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuotesComponent } from './quotes/quotes.component';

const appRoutes: Routes = [
    {path: 'quotes', redirectTo: 'quotes/0/10', pathMatch: 'prefix'},
    {path: 'quotes/:startIndex/:endIndex', component: QuotesComponent, pathMatch: 'prefix'},
    {path: 'resume', redirectTo: '', pathMatch: 'full'},
    {path: 'From-LinkedIn', redirectTo: '', pathMatch: 'full'},
    {path: '', component: LandingPageComponent, pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
