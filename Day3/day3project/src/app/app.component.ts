import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Welcome to your life</h1>
      <second-comp></second-comp>
    </div>
  `,
})
export class AppComponent {
  title = 'Hellow World';
}
