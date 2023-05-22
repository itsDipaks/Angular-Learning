import { Component, Input } from "@angular/core"

@Component({
    selector: "app-childPC"
    , template: `
    <div>
    <div> 
  <h3>  Child Component</h3>
</div> 
    {{parentdata}}
    </div>
    `
})

export class ChildCompoPC {
    @Input() parentdata = ""
}