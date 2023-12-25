import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = false;

  myForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private router: Router) {
    this.email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log("Form submitted")
      this.router.navigate(['/']);
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
