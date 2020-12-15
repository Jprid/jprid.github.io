import {Routes, RouterModule} from '@angular/router';
const appRoutes = [
    {path: '', redirectTo: 'About', pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes);
