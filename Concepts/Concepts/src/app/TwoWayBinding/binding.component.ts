import { Component } from "@angular/core";

@Component({
    selector:"app-binding",
    template:`
    <div>

<input  type="text" [(ngModel)]="inputval"/>
<h4>Input Value </h4>
<p>{{inputval}}</p>
    </div>`
})

export class TwoWayBinding{
    title="Two Way Binding "

    inputval:any 
}