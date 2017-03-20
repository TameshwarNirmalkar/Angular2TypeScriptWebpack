import { Component } from '@angular/core';
const path = require('path');

@Component({
  // moduleId: module.id+'',
  selector: 'my-app',
  // templateUrl: './src/app/app.components.html',
  template: `
    <side-bar></side-bar>
    <div id="content">
        <div id="wrapper" class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styles: ['src/app/app.component.css']
})

export class AppComponent {

}