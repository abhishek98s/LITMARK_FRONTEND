import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import * as jwt from 'jsonwebtoken'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }

        // try {
        //     const decodedToken = jwt.verify(token, 'secret_key')
        //     // save the tokoen info in some state
        //     return true;
        // }catch(error){
        //     // some error
        // }
        return true;
    }

}