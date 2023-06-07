import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-template',
  template: `
   <div>
    <h2>Template Driven Form</h2>
        <form action="#" method="get" #uform="ngForm" (submit)="submitHandler($event, uform)" >
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input #uname="ngModel" [(ngModel)]="userdata.username" required type="text" name="username" id="username" class="form-control" >
            <div *ngIf="uname.invalid && uname.touched" class="form-text val">User Name is Invalid</div>
          </div>
          <div class="mb-3">
            <label for="userage" class="form-label">User Age</label>
            <input #uage="ngModel" [(ngModel)]="userdata.userage" required type="number" name="userage" min="18" max="90" id="userage" class="form-control" >
            <div *ngIf="uage.invalid && uage.touched" class="form-text val">User Age is Invalid</div>
          </div>
          <div class="mb-3">
            <label for="userphone" class="form-label">User Phone</label>
            <input title="### ####-####" placeholder="Expected Pattern ### ####-####" #uphone="ngModel" pattern="[0-9]{3} [0-9]{4}-[0-9]{4}" [(ngModel)]="userdata.userphone" required type="text" name="userphone" id="userphone" class="form-control" >
            <div *ngIf="uphone.invalid && uphone.touched" class="form-text val">User Phone is Invalid</div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
          </div>
 
        </form>
        <ul>
          <li>User Name {{ userdata.username }}</li>
          <li>User Age {{ userdata.userage }}</li>
          <li>User Phone {{ userdata.userphone }}</li>
        </ul>
 
        <ul>
          <li *ngIf="uname.touched">User Name : Touched</li>
          <li *ngIf="uname.untouched">User Name : Untouched</li>
          <li *ngIf="uname.pristine">User Name : Pristine</li>
          <li *ngIf="uname.dirty">User Name : Dirty</li>
          <li *ngIf="uname.valid">User Name : Valid</li>
          <li *ngIf="uname.invalid">User Name : InValid</li>
        </ul>
        <ul>
          <li *ngIf="uage.touched">User Age : Touched</li>
          <li *ngIf="uage.untouched">User Age : Untouched</li>
          <li *ngIf="uage.pristine">User Age : Pristine</li>
          <li *ngIf="uage.dirty">User Age : Dirty</li>
          <li *ngIf="uage.valid">User Age : Valid</li>
          <li *ngIf="uage.invalid">User Age : InValid</li>
        </ul>
        <ul>
          <li *ngIf="uphone.touched">User Phone : Touched</li>
          <li *ngIf="uphone.untouched">User Phone : Untouched</li>
          <li *ngIf="uphone.pristine">User Phone : Pristine</li>
          <li *ngIf="uphone.dirty">User Phone : Dirty</li>
          <li *ngIf="uphone.valid">User Phone : Valid</li>
          <li *ngIf="uphone.invalid">User Phone : InValid</li>
        </ul>
   </div>
  `,
  styles: [`
    .val{
      color : crimson;
    }
    input.ng-valid.ng-touched{
      border : 2px solid darkseagreen;
    }
    input.ng-invalid.ng-touched{
      border : 2px solid crimson;
    }
  `]
})
export class TemplateComponent {
  userdata = {
    username : "",
    userage : "",
    userphone : "",
  }
 
  submitHandler(event:any, userForm:any){
    event.preventDefault(); // optional but recomended
    // console.log(event.target.username.value)
    // console.log(userForm.controls.username.value)
   /*  
    if(event.target.userage.value < 18){
      alert("you are too young to join us")
    }else if(event.target.userage.value > 90){
      alert("you are too old to join us")
    }else{
      alert("welcome to our company");
      event.target.submit();
    } 
    */
 
    if(userForm.controls.userage.value < 18){
      alert("you are too young to join us")
    }else if(userForm.controls.userage.value > 90){
      alert("you are too old to join us")
    }else{
      alert("welcome to our company");
      event.target.submit();
    } 
 
  }
}