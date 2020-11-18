import {Routes, RouterModule} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
const appRoutes = [
    {path: 'About', component: AboutPageComponent},
    {path: '', redirectTo: 'About', pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes);
