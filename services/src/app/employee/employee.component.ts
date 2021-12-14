import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  template: `
    <h3>Employee List</h3>
    <h4 style="color: red;">{{errorMessage}}</h4>
    <ul *ngFor="let e of employees">
      <li>{{e.name}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeComponent implements OnInit {

  public employees: {id: number, name: string, age: number}[] = [];
  public errorMessage = "";

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data, error => this.errorMessage = error);
  }

}
