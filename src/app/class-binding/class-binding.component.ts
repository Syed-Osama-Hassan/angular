import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <!-- Class Binding -->
    <h2 [class]="successClass">
      Class Binding
    </h2>

    <h2 [class.text-danger]="hasError">
      Error
    </h2>

    <!-- ngClass Directive -->
    <h2 [ngClass]="messageClasses">Class Directives</h2>

  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic; 
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };


  constructor() { }

  ngOnInit(): void {
  }

}
