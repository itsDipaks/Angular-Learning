import { Component } from "@angular/core";
@Component({
selector:"app-child",
inputs:["quantity"],
template:`
<div>hellow From Child

<ng-content></ng-content>
{{quantity}}
</div>

`
})
export class Childcomponant{
    quantity:number=0
}