import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  template: `
    <h2>
      Template Reference Variable
    </h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)" >log</button>
  `,
  styles: [``]
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(input:String){
    console.log(input);
  }

}
