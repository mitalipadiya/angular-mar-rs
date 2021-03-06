import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {APIEndpoints} from '../constants/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(APIEndpoints.AUTH_TOKEN, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions)
      .pipe(catchError(this.handleError<any>(`login ${credentials}`)));
  }
  register(user): Observable<any> {
    return this.http.post(APIEndpoints.AUTH_REGISTER, {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions)
      .pipe(catchError(this.handleError<any>(`signup ${user}`)));
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
