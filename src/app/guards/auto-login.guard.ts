import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/main/home']);
      return false;
    } else {
      return true;
    }
  }

}
