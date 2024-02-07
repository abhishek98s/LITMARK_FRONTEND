import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '../Model/folder';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  onRegister(user: RegisterUser) {
    console.log(user)
  }

  onLogin(user: LoginUser) {
    console.log(user)
    localStorage.setItem('token', user.email)
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
