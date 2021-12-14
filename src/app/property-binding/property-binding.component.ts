import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <!-- Property Binding -->
    <input [id]="myId" type="text" value="James">
    <input [disabled]="isDisabled" [id]="myId" type="text" value="Ivery">
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
