import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class loggedInGuard {
  constructor(
    private location: Location,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  canActivate(): any {
    const token = localStorage.getItem('token');
    const url = this.location.path();

    if (!token) {
      return true;
    }

    try {
      if (
        !this.jwtHelper.isTokenExpired(token) &&
        /(login|register)/.test(url)
      ) {
        throw new Error();
      }
      this.router.navigate(['/login']);
      return false;
    } catch (error) {
      this.router.navigate(['bookmark/recent']);
    }
  }
}
