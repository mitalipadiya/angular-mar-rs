import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorGuard implements CanActivate {
  constructor(private tokenStorageService: TokenStorageService) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!this.tokenStorageService.getToken()) {
      if (this.tokenStorageService.getUser().roles.includes('ROLE_MODERATOR')) {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }
}
