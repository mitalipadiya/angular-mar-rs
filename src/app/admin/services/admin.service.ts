import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APIEndpoints} from '../../core/constants/constants';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  addVertical(vertical): Observable<any> {
    return this.http.post(APIEndpoints.VERTICALS_API, vertical, httpOptions)
      .pipe(catchError(this.handleError<any>(`add vertical ${vertical}`)));
  }
  getVerticals(): Observable<any>{
    return this.http.get(APIEndpoints.VERTICALS_API);
  }
  deleteVertical(vertical): Observable<any> {
    return this.http.delete(APIEndpoints.VERTICALS_API + `/${vertical.id}`, httpOptions)
      .pipe(catchError(this.handleError<any>(`delete vertical ${vertical}`)));
  }
  editVertical(vertical): Observable<any> {
    return this.http.put(APIEndpoints.VERTICALS_API + `/${vertical.id}`, vertical, httpOptions)
      .pipe(catchError(this.handleError<any>(`edit vertical ${vertical}`)));
  }
  addAtStart(array, data): any {
    const allArray = [...array];
    allArray.unshift(data);
    return [...allArray];
  }
  deleteFromArray(array, data): any {
    return array.filter(dt => dt.id !== data.id);
  }
  editElementInArray(array, data): any {
    const allArray = [...array];
    const index = allArray.findIndex(p => p.id === data.id);
    allArray[index] = data;
    return [...allArray];
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
