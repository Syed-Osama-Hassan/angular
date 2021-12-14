import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- Interpolation -->
    <h2>
      Welcome {{name}}
    </h2>
    
    <!-- Perform operation -->
    <h2>
      2 + 2 =
      {{2+2}}
    </h2>

    <!-- JS Functions -->
    <h2>
      Name length: {{name.length}}
    </h2>

    <!-- Calling class function -->
    <h2>
      {{greetUser()}}
    </h2>
    <p>
      {{siteUrl}}
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Hassan";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }
  
  greetUser(): String{
    return "Hello, " + this.name;
  }
}
