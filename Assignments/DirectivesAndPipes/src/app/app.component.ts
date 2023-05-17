import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
 <app-navbar></app-navbar>
 <app-table></app-table>
  </div>
  `,
  // style: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesAndPipes';
}
