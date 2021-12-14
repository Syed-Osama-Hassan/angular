import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <!-- Event Binding -->
    <h2>Event Binding:</h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greet='Welcome to event!'">Greet</button>
    {{greet}}
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  public greet = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any){
    console.log(event);
    this.greet = event.type;
  }

}
