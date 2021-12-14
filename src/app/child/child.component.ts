import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <!-- Component Interaction -->
    <h2>{{"Hello " + name}}</h2>
    <button (click)="fireEvent()">Send data to parent</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  // Input and Output Decorators
  @Input('parentData') public name:string ="";
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Sending from child to parent');
  }

}
