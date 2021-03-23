import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad, CanActivateChild} from '@angular/router';
import {TokenStorageService} from '../token-storage.service';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private tokenStorageService: TokenStorageService,
              private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    console.log('Admin ==>', this.checkLogin(url));
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (!!this.tokenStorageService.getToken()) {
      if (this.tokenStorageService.getUser().roles.includes('ROLE_ADMIN')) {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
    this.authService.redirectUrl = url;
  }
}
