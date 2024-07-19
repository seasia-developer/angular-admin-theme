import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var userData = JSON.parse(localStorage.getItem('userData') || '{}');
    var isLogin = userData['isLogin'];
    var token = userData['token'];
    if (userData && isLogin === true && token !== '') {
      console.log("sucesss")
      return true
    }
    else {
      console.log("failure")
      console.log(userData, "userData")
      console.log(isLogin , "isLogin")
      console.log(token , "token")
      this.router.navigate(['/auth/login']),
        { relativeTo: this.activatedRoute };
      return false;
    }

  }

}
