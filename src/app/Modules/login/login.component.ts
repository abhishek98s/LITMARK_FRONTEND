import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword: boolean = false;

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toast: ToastService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submitForm() {
    if (!(this.loginForm.status === 'VALID' && !this.loginForm.errors)) {
      this.toast.error('Email and password is required')
      return
    }
    this.authService.onLogin(this.loginForm.value).subscribe(
      (res) => {
        if (res.data) {
          localStorage.setItem('token', res.data)
          this.router.navigate(['/']);
        }
      },
      (error) => {
        if (!error.error.msg) {
          this.toast.error("Internet Unavailable");
          return;
        }
        this.toast.error(error.error.msg);
        console.error('Error handler:', error);
      }
    )
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
