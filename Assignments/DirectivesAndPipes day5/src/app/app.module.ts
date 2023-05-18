import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponents } from './navbar.component';
import { TableCompo } from './table.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponents,TableCompo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
