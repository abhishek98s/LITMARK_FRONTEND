import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword: boolean = false;

  loginObj = {
    email: '',
    password: '',
  };
  constructor(private router: Router, 
    // private authService: AuthService
    ) {}

  submitForm() {
    // this.authService.onLogin(this.loginObj).subscribe((res: any) => {
    //   console.log('res', res);
    //   localStorage.setItem('token', res.data);
    // });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
