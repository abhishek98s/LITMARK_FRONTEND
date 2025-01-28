import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isPasswordShown: boolean = false;
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
      ]),
    });
  }

  submitForm() {
    if (!(this.registerForm.status === 'VALID' && !this.registerForm.errors)) {
      this.toast.error('All field are required.');
      return;
    }
    this.authService.onRegister(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
        this.toast.success('You are registered.');
      },
      error: (error) => {
        const err = error.error.message;
        if (!err) {
          this.toast.error('Check connection.');
          return;
        }
        this.toast.error(err);
      },
    });
  }

  togglePassword() {
    this.isPasswordShown = !this.isPasswordShown;
  }
}
