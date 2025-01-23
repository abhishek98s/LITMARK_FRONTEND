import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root',
})
export class loggedInGuard {
  constructor(
    private location: Location,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private stateService: StateService
  ) {}

  canActivate(): any {
    const token = localStorage.getItem('token');
    const url = this.location.path();

    if (!token) {
        this.stateService.state.loading = false;

      return true;
    }

    try {
      if (
        !this.jwtHelper.isTokenExpired(token) ||
        /(login|register|)/.test(url)
      ) {
        throw new Error();
      } else {
        this.stateService.state.loading = false;

        this.router.navigate(['/login']);
      }
      return false;
    } catch (error) {
      this.router.navigate(['bookmark/recent']);
    }
  }
}
