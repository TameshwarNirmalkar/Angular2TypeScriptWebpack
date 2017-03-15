import { Component } from '@angular/core';

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html'
})

export class SideBarComponent{
    linksData: Sidebar[]

    constructor(){
        this.linksData = [
            {
                link: '/dashboard',
                title: 'Dashboard'
            },
            {
                link: '/checkoutcredentials',
                title: 'Checkout Credentials'
            },
            {
                link: '/shippingprofiles',
                title: 'Shipping Profiles'
            },
            {
                link: '/businessprofile',
                title: 'Business Profile'
            },
            {
                link: '/production-access',
                title: 'Production Access'
            },
            {
                link: '/loyalty-program',
                title: 'Loyalty Program'
            },
            {
                link: '/keymanagement',
                title: 'Key Management'
            },
            {
                link: '/permissions',
                title: 'Permissions'
            }
        ]
    }

}

interface Sidebar {
    link: string,
    title: string
}