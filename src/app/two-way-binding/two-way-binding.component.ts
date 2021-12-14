import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h2>Two Way Binding</h2>
    <input [(ngModel)]="name" type="text">{{name}}
  `,
  styles: [``]
})
export class TwoWayBindingComponent implements OnInit {

  public name ="";

  constructor() { }

  ngOnInit(): void {
  }

}
