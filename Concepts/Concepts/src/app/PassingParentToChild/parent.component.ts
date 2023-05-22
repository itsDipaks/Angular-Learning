import {Component} from "@angular/core"

@Component({
    selector:"app-parentPC"
    ,template:`
    <div>
        
    <h3>
    Parent Component 
    </h3> 
{{data}}
<app-childPC [parentdata]="data"></app-childPC>
</div>
    `
})

export class ParentCompoPC{
data:string="Data From Parent"
}