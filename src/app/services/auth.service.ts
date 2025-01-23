import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '../model/auth.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_URL } from '../utils/app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  onRegister(user: RegisterUser) {
    return this.http.post(`${APP_URL}/auth/register`, user)
  }

  onLogin(user: LoginUser):Observable<any> {
    return this.http.post(`${APP_URL}/auth/login`, user)
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
