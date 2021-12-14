import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <!-- Style Binding -->
    <h2 [style.color]="'orange'">
      Style binding
    </h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">
      Style Binding Error
    </h2>
    <h2 [style.color]="highlight">
      Style Binding Highlight
    </h2>
    <h2 [ngStyle]="titleStyle">
      Style Binding NgStyle
    </h2>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {

  public hasError = false;
  public highlight = "orange";
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
