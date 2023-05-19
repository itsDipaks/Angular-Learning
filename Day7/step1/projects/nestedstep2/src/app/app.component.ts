import { Component } from '@angular/core';
import { UserServices } from './user.service';

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
  <tr *ngFor="let user of usersData.data">
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
  usersData:any = [];
  constructor(private ud:UserServices){
console.log(this.usersData)
  }

  ngOnInit(){
    this.ud.getusersdata().subscribe(res=>this.usersData=res)
  }
}
