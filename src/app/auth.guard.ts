import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot, UrlTree
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /* inject router service */
  private routerService: Router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    const value = localStorage.getItem("logged");
    if (value && value === 'true') {
      return true;
    } else {
      /* if not logged in, redirect to login */
      return this.routerService.parseUrl('/login');
    }

  }

}
