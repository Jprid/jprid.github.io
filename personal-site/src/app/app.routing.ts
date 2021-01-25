import {Routes, RouterModule} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
    {path: 'resume', redirectTo: '', pathMatch: 'full'},
    {path: '', component: LandingPageComponent, pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
