import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employe } from '../classes/employe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost:8080/employes';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  AddEmploye(data: Employe): Observable<any> {
    let API_URL = `${this.endpoint}/addEmploye`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  GetEmployes() {
    return this.http.get(`${this.endpoint}/search`);
  }

  GetEmploye(id:string): Observable<any> {
    let API_URL = `${this.endpoint}/selectEmploye/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  UpdateEmploye(id:string, data:Employe): Observable<any> {
    let API_URL = `${this.endpoint}/updateEmploye/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete student
  DeleteEmploye(id:string): Observable<any> {
    var API_URL = `${this.endpoint}/deleteEmploye/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
