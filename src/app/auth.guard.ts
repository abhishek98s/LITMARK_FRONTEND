import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import * as jwt from 'jsonwebtoken'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router, private jwtHelper: JwtHelperService) { }

    canActivate(): any {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        
        try {
            const decodedToken = this.jwtHelper.isTokenExpired(token);
            if(!decodedToken) true
            
            return
        } catch (error) {
            this.router.navigate(['/login']);
        }

    }
}