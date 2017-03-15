import { Component } from '@angular/core';

@Component({
  // moduleId: module.id+'',
  selector: 'my-app',
  template: `
    <side-bar></side-bar>
    <div id="content">
      <div id="wrapper" class="container-fluid">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
  // styleUrls: ['./src/app/app.styles.css'],
})

export class AppComponent {

}