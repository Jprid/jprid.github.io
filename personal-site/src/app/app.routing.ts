import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    {path: 'resume', redirectTo: 'About', pathMatch: 'full'},
    {path: '', redirectTo: 'About', pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes);
