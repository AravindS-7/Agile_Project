import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserAuthService } from './services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserAuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.redirectUrl = state.url;
      console.log('URL', state.url);
      return Observable.create((observer: Observer<boolean>) => {
        if (this.authService.isLoggedIn){
          console.log('logged in');
          observer.next(true);
        } else {
          console.log('Not logged in');
          this.router.navigate(['login'], { queryParams: { from: state.url.substr(1) } });
        }
      });
  }
  }
  

