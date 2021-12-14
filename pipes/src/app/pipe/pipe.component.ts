import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
    <h2>Pipes</h2>
    <h3>{{name}}</h3>

    <!-- Using pipes -->
    <h3>lowercase = {{name | lowercase}}</h3>
    <h3>uppercase = {{name | uppercase}}</h3>
    <h3>titlecase = {{message | titlecase}}</h3>
    <h3>slice = {{message | slice:7 | titlecase}}</h3>
    <h3>json = {{person | json}}</h3>

    <!-- Number Pipes -->
    <h3>{{5.368 | number:'1.2-3'}}</h3>
    <h3>{{5.368 | number:'2.4-5'}}</h3>
    <h3>{{5.368 | number:'3.1-2'}}</h3>

    <!-- Percentage Pipe -->
    <h3>{{0.25 | percent}}</h3>

    <!-- Currency Pipe -->
    <h3>{{0.25 | currency}}</h3>
    <h3>{{0.25 | currency: 'GBP'}}</h3>
    <h3>{{0.25 | currency: 'GBP': 'code'}}</h3>

    <!-- Date Pipe -->
    <h3>{{date}}</h3>
    <h3>{{date | date: 'short'}}</h3>
    <h3>{{date | date: 'shortDate'}}</h3>
    <h3>{{date | date: 'shortTime'}}</h3>
  `,
  styles: []
})
export class PipeComponent implements OnInit {

  public name = "John";
  public  message = "Welcome to angular tutorial";
  public person = {
    "firstname": "John",
    "lastname": "Doe"
  };

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
