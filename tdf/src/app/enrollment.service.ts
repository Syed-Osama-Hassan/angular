import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post<User>(this._url, user)
              .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
