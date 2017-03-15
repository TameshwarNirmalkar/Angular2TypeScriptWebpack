import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutCredentialsComponent } from './checkoutcredentials/checkoutcredentials.component';
import { ShippingProfilesComponent } from './shipping_profiles/shippingprofiles.component';
import { BusinessProfileComponent } from './business_profile/businessprofile.component';
import { ProductionAccessComponent } from './production_access/productionaccess.component';
import { LoyaltyProgramsComponent } from './loyaltyprograms/loyaltyprograms.component';
import { KeymanagementComponent } from './keymanagement/keymanagement.component';
import { PermissionsComponent } from './permission/permission.component';
/* sample component */
import { AboutComponent } from '../app/aboutus/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'checkoutcredentials',
        component: CheckoutCredentialsComponent
    },
    {
        path: 'shippingprofiles',
        component: ShippingProfilesComponent
    },
    {
        path: 'businessprofile',
        component: BusinessProfileComponent
    },
    {
        path: 'production-access',
        component: ProductionAccessComponent
    },
    {
        path: 'keymanagement',
        component: KeymanagementComponent
    },
    {
        path: 'loyalty-program',
        component: LoyaltyProgramsComponent
    },
    {
        path: 'permissions',
        component: PermissionsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);