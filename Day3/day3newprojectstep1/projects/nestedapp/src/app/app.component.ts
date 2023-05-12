import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <div>
  <h1>Hellow all</h1>
  {{title}}
  </div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Welcome to nested Components';
}
