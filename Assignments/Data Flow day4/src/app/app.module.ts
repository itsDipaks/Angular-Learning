import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComp } from './banner.component';
import { FooterComp } from './footer.component';
import { HeaderComp } from './header.component copy';
import { MainComp } from './main.component';
import { Product } from './product.component';
import { TopBar } from './topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComp,
    FooterComp,
    HeaderComp,
    MainComp,
    Product,
    TopBar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
