import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword: boolean = false;

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submitForm() {
    if (this.loginForm.status === 'VALID' && !this.loginForm.errors) {
      this.authService.onLogin(this.loginForm.value)
      this.router.navigate(['/']);
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
