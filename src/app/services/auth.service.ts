import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '../Model/folder';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  onRegister(user: RegisterUser) {
    return
  }

  onLogin(user: LoginUser) {
    localStorage.setItem('token', user.email)
    return
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
