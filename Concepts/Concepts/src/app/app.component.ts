import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <div style="text-align: center;">


  <h1>Two Way Binding</h1>
  <app-binding></app-binding>
<hr>
  <h1>Passing Props From Parent to Child </h1>
<app-parentCP></app-parentCP>
 
<hr>

<h1>Passing Props From Child to Parent</h1>

  </div>
  `

})
export class AppComponent {
  title = 'Concepts';
}
