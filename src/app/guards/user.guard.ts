import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Store, select } from '@ngrx/store';
import { isAuthenticate } from '../ngrx/authenticate/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router, private store: Store){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      return this.store.pipe(
        select(isAuthenticate),
        map(isAuthenticate => {
          if(isAuthenticate === undefined || isAuthenticate === null){
            this.router.navigateByUrl('login');
            return false;
          }else if(isAuthenticate){
            return true;
          }else {
            this.router.navigateByUrl('login');
            return false;
          }
        })
      );
  }
  
}
