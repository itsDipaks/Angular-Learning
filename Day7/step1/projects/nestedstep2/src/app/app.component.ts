import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
<table>
  <thead>
    <th>no</th>
    <th>firstname</th>
    <th>lastname</th>
    <th>avtar</th>
    <th>email</th>
  </thead>
  <tbody>
  <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.avatar }}</td>
          <td>{{ user.email }}</td>
        </tr>
  </tbody>
</table>
  </div>
  `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "AJAX in Angular";
  users:any = [];
}
