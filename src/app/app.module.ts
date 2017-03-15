import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.components';
import { SideBarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutCredentialsComponent } from './checkoutcredentials/checkoutcredentials.component';
import { ShippingProfilesComponent } from './shipping_profiles/shippingprofiles.component';
import { BusinessProfileComponent } from './business_profile/businessprofile.component';
import { ProductionAccessComponent } from './production_access/productionaccess.component';
import { LoyaltyProgramsComponent } from './loyaltyprograms/loyaltyprograms.component';
import { KeymanagementComponent } from './keymanagement/keymanagement.component';
import { PermissionsComponent } from './permission/permission.component';

import { routing } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/**
 * this is sample component
 */
import { AboutComponent } from './aboutus/about.component';

@NgModule({
  imports: [BrowserModule, HttpModule, routing],
  declarations: [
    AppComponent, 
    SideBarComponent, 
    DashboardComponent,
    CheckoutCredentialsComponent, 
    ShippingProfilesComponent,
    BusinessProfileComponent,
    ProductionAccessComponent,
    LoyaltyProgramsComponent,
    KeymanagementComponent,
    PermissionsComponent
  ],
  providers:    [
      {
          provide: LocationStrategy, useClass: HashLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
