import {Routes, RouterModule} from '@angular/router';
import { PageComponent } from './page/page.component';
import { AboutPageComponent } from './about-page/about-page.component';
const appRoutes = [
    {path: 'About', component: AboutPageComponent},
    {path: ':key', component: PageComponent},
    {path: '', redirectTo: 'About', pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes);