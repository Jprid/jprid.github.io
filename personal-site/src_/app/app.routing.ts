import {Routes, RouterModule} from '@angular/router';
import { PageComponent } from './page/page.component';
const appRoutes = [
    {path: ':key', component: PageComponent},
    {path: '', redirectTo: 'About', pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes);