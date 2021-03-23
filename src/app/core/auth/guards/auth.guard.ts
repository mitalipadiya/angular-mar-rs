import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route} from '@angular/router';
import {TokenStorageService} from '../token-storage.service';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
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
    console.log('Auth guard ==>', this.checkLogin(url));
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (!!this.tokenStorageService.getToken()) {
      return true;
    }
    this.authService.redirectUrl = url;
    return false;
  }
}
