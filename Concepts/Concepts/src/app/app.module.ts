import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TwoWayBinding } from './TwoWayBinding/binding.component';
import { ParentCompoCP } from './PassingChildToParent/parent.component';
import { ChildCompoCP } from './PassingChildToParent/child.component';
@NgModule({
  declarations: [
    AppComponent,TwoWayBinding,ParentCompoCP,ChildCompoCP
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
