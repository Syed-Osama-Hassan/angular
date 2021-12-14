import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "/assets/data/employee1.json";

  constructor(private http : HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                .pipe(
                  catchError(this.errorHandler)
                );
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Internal Server Error")
  }

}
