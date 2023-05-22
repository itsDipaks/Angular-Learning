import {Component,Output,EventEmitter} from "@angular/core"

@Component({
selector:"app-childCP",
template:`

<div>
    
    
   <h3>
   Child Component
   </h3>
    
    <input placeholder="is in child component"  #inputval/>
    <button (click)="getchildData.emit(inputval.value)">Pass Data To Parent</button>
    </div>
`
})

export class ChildCompoCP{
@Output() getchildData=new EventEmitter<string>()
}