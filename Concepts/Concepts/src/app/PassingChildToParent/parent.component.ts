import {Component} from "@angular/core"

@Component({
selector:"app-parentCP",
template:`

<div>

<app-childCP (getchildData)="getData($event)"></app-childCP>
<h3>Parent Component</h3>
<h4> {{data}} </h4>

</div>
`
})

export class ParentCompoCP{
    data=""
getData(data:string){
this.data=data
console.log("yes")
}
}