import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '../Model/auth.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  onRegister(user: RegisterUser) {
    return this.http.post('http://localhost:5000/api/auth/register', user)
  }

  onLogin(user: LoginUser):Observable<any> {
    return this.http.post('http://localhost:5000/api/auth/login', user)
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
