import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <h2>
      Structural Directives
    </h2>
    <!-- If Else -->
    <p *ngIf="displayName; else elseBlock">ngIf block</p>

    <ng-template #elseBlock>
      <p>Else block</p>

    </ng-template>

    <!-- Then Else Example -->
    <div *ngIf="displayName; then thenBlock else elseBlock2"></div>

    <ng-template #thenBlock>
      <p>Then Block</p>
    </ng-template>

    <ng-template #elseBlock2>
      <p>Else Block 2</p>
    </ng-template>

    <!-- ngSwitch Directive -->
    <h2>Switch Directive</h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red</div>
      <div *ngSwitchCase="'yellow'">You picked yellow</div>
      <div *ngSwitchCase="'green'">You picked green</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>

    <!-- ngFor Directive -->
    <h2>For Directive</h2>
    <div *ngFor="let c of colors; index as i; first as f; last as l">
      <h3>{{i + 1}}. {{c}}, first={{f}}, last={{l}}</h3>
    </div>
  `,
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {

  public displayName= true ;
  public color = "blue";
  public colors = ["red", "yellow", "green", "blue"];

  constructor() { }

  ngOnInit(): void {
  }

}
