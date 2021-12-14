import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>

    <ul>
      <li (click)="onSelect(d)" [class.selected]="isSelected(d)" *ngFor="let d of departments">
        <span>{{d.id}}</span>-{{d.name}}
      </li>
    </ul>

  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    { "id": 1, "name": "CS"},
    { "id": 2, "name": "EE"},
    { "id": 3, "name": "BBA"}
  ];
  public selectedId = -1;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '-1');
      this.selectedId = id;
    });
  }

  onSelect(department:any){
    // Absolute navigation
    //this.router.navigate(['/departments', department.id]);

    // Relative Navigation
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department: any){
    return department.id === this.selectedId;
  }

}
