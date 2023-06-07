import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-reactive-builder',
  template: `
  
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
        <button (click)="generateUserName()">Set User Name to Spiderman</button>
        <button (click)="generateUserDetails()">Set User Details</button>
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
export class ReactiveBuilderComponent {
  userForm:any
 
  constructor( private fb:FormBuilder ){
    //empty
  }
 
  ngOnInit(){
    this.userForm = this.fb.group({
        username : ["", Validators.required],
        userage : ["", [Validators.required, Validators.min(18), Validators.max(90) ]],
        userphone : ["", [Validators.required, Validators.pattern("[0-9]{3} [0-9]{4}-[0-9]{4}") ]]
    })
  }
 
  submitHandler(){
  
  }
 
  generateUserName(){
    this.userForm.patchValue({
        username : "Spiderman"
    })
  }
  generateUserDetails(){
    this.userForm.setValue({
        username : "Batman",
        userage : 21,
        userphone : "123 1234-1234"
    })
  }
}