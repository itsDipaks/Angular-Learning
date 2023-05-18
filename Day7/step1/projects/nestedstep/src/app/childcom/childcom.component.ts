import { Component, OnChanges, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-childcom',
  template: `
  <h1>
  Child Component
  </h1>
  `
  // styleUrls: ['./childcom.component.css']
})


export class ChildcomComponent implements  OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked  {
 
  constructor(){
    console.log("AppComponent's constructor was called")
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("AppComponent's ngOnChanges was called")
  // }
 
  ngOnInit(){
    console.log("AppComponent's ngOnInit was called")
  }
  
  ngAfterContentInit(){
    console.log("AppComponent's ngAfterContentInit was called")
  }
 
  ngAfterContentChecked(){
    console.log("AppComponent's ngAfterContentChecked was called")
  }
 
  ngAfterViewInit(){
    console.log("AppComponent's ngAfterViewInit was called")
  }
 
  ngAfterViewChecked(){
    console.log("AppComponent's ngAfterViewChecked was called")
  }
 
  ngOnDestroy(){
    console.log("AppComponent's ngOnDestroy was called")
  }
 
}
