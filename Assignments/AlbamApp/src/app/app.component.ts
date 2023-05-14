import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
<app-navbar></app-navbar>
<app-intro></app-intro>
<app-body></app-body>
  </div>
  
  
  `,

})
export class AppComponent {
  title = 'AlbamApp';
}
