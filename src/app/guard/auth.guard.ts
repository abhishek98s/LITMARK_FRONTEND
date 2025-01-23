import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private stateService: StateService
  ) {}

  canActivate(): any {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      this.stateService.state.loading = false;
      
      return false;
    }

    try {
      const isTokenInvalid = this.jwtHelper.isTokenExpired(token);
      if (isTokenInvalid) {
        throw new Error();
      }
      return true;
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
}
