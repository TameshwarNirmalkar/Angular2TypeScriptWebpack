import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/components/app.component';
import { AboutComponent } from '../app/components/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);