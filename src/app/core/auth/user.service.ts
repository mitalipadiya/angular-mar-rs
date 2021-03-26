import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APIEndpoints} from '../constants/constants';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(APIEndpoints.USER_API + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(APIEndpoints.USER_API + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(APIEndpoints.USER_API + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(APIEndpoints.USER_API + 'admin', { responseType: 'text' });
  }
}
