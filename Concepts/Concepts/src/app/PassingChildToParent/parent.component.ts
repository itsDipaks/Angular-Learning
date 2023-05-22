import {Component} from "@angular/core"

@Component({
    selector:"app-parentCP"
    ,template:`
    <div>
        
    <h3>
    Parent Component 
    </h3> 
{{data}}
<app-childCP [parentdata]="data"></app-childCP>
</div>
    `
})

export class ParentCompoCP{
data:string="Data From Parent"
}