import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h3>Employee Details</h3>
    <h4 style="color: red;">{{errorMessage}}</h4>
    <ul *ngFor="let e of employees">
      <li>{{e.id}} -- {{e.name}} -- {{e.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees: {id: number, name: string, age: number}[] = [];
  public errorMessage = "";

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data, error => this.errorMessage = error);
  }

}
