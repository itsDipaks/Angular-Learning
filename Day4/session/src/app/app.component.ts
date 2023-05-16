import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div>
<h1>Hellow From Parant Componant</h1>
<button (click)="count=count+1">clicked {{count}}</button>
<app-child [quantity]="count">
<h2>Massage from Child Directives</h2>
</app-child>
</div>
  `
})
export class AppComponent {
  title = 'session';
  count: number = 0
}
