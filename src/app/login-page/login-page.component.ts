import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ngt-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, ButtonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rememberMe: [false],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      this.router.navigate(['/home']);
    }
  }
}
