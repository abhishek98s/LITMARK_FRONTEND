import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class loggedInGuard {

  constructor(private location: Location, private jwtHelper: JwtHelperService, private router: Router) { }


  canActivate(): any {
    const token = localStorage.getItem('token');
    const url = this.location.path();

    if (!this.jwtHelper.isTokenExpired(token) && /(login|register)/.test(url)) {
      this.router.navigate(['/']);
    }
  }
}