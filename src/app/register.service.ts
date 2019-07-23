import { UserData } from './user-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { withModule } from '@angular/core/testing';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  private URL: string = "//localhost:8082/api/users/register";



  // httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response' }

  constructor(private http: HttpClient) { }




  registerUser(userData: any): Observable<UserData> {
    return this.http.post<UserData>(this.URL, userData).pipe(retry(1), catchError(this.handleError));
  }


  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.errorMessage}`;
    } else {
      errorMessage = `${error.error.errorMessage}`;
    }
    return throwError(errorMessage);
  }
}
