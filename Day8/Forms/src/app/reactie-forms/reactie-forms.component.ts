import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-reactive',
  template: `
   <div>
    <h2>Reactive Form</h2>
      <div [formGroup]="userForm" >
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input formControlName="username" id="username" class="form-control" >
            <div *ngIf="userForm.get('username').invalid && userForm.get('username').touched" class="form-text val">User Name is Invalid</div>
          </div>
          <div class="mb-3">
            <label for="userage" class="form-label">User Age</label>
            <input formControlName="userage"  id="userage" class="form-control" >
            <div *ngIf="userForm.get('userage').invalid && userForm.get('userage').touched" class="form-text val">User Age is Invalid</div>
          </div>
          <div class="mb-3">
            <label for="userphone" class="form-label">User Phone</label>
            <input formControlName="userphone"  id="userphone" class="form-control" >
            <div *ngIf="userForm.get('userphone').invalid && userForm.get('userphone').touched" class="form-text val">User Phone is Invalid</div>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary mb-3">Submit</button>
          </div>
        </div>
        <ul>
          <li>User Name {{ userForm.get("username")?.value }}</li>
          <li>User Age {{ userForm.get("userage")?.value }}</li>
          <li>User Phone {{ userForm.get("userphone")?.value }}</li>
        </ul>
 
        <ul>
          <li *ngIf="userForm.get('username').touched">User Name : Touched</li>
          <li *ngIf="userForm.get('username').untouched">User Name : Untouched</li>
          <li *ngIf="userForm.get('username').pristine">User Name : Pristine</li>
          <li *ngIf="userForm.get('username').dirty">User Name : Dirty</li>
          <li *ngIf="userForm.get('username').valid">User Name : Valid</li>
          <li *ngIf="userForm.get('username').invalid">User Name : InValid</li>
        </ul>
        <ul>
          <li *ngIf="userForm.get('userage').touched">User Age : Touched</li>
          <li *ngIf="userForm.get('userage').untouched">User Age : Untouched</li>
          <li *ngIf="userForm.get('userage').pristine">User Age : Pristine</li>
          <li *ngIf="userForm.get('userage').dirty">User Age : Dirty</li>
          <li *ngIf="userForm.get('userage').valid">User Age : Valid</li>
          <li *ngIf="userForm.get('userage').invalid">User Age : InValid</li>
        </ul>
        <ul>
          <li *ngIf="userForm.get('userphone').touched">User Phone : Touched</li>
          <li *ngIf="userForm.get('userphone').untouched">User Phone : Untouched</li>
          <li *ngIf="userForm.get('userphone').pristine">User Phone : Pristine</li>
          <li *ngIf="userForm.get('userphone').dirty">User Phone : Dirty</li>
          <li *ngIf="userForm.get('userphone').valid">User Phone : Valid</li>
          <li *ngIf="userForm.get('userphone').invalid">User Phone : InValid</li>
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
export class ReactiveComponent {
  userForm:any
 
  constructor(){
    //empty
  }
 
  ngOnInit(){
    this.userForm = new FormGroup({
      username : new FormControl(null, { validators : Validators.required }),
      userage : new FormControl(null, { validators : [Validators.required, Validators.min(18), Validators.max(90)] }),
      userphone : new FormControl(null, { validators : [Validators.required, Validators.pattern("[0-9]{3} [0-9]{4}-[0-9]{4}")] }),
    })
  }
 
  submitHandler(){
  
  }
}